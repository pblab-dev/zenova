import { sendNow } from "../mailer/sendMailer";
import Queue from "bee-queue";
import fs from "file-system";

const queue = new Queue("my-queue");

queue.on("ready", function () {
  queue.process(async function (job, done) {
    try {
      console.log(`Processing job:${job.id}`);
      console.log(job.data);
      return sendNow(job.data)
        .then((r) => {
          console.log(r.data);
          if (r.data.status.indexOf("failed") > -1) {
            const logMessage = `${new Date().toString()}: Erro ao enviar e-mail - ${
              r.data.message
            } - ${JSON.stringify(job.data)}\n`;
            fs.writeFileSync("error.log", logMessage, { flag: "a" }); // 'a' indica que deve ser anexado ao arquivo existente
          }
          return done(null, job.data);
        })
        .catch((err) => {
          const logMessage = `${new Date().toString()}: Erro ao enviar e-mail - ${
            err.message
          } - ${JSON.stringify(job.data)}\n`;
          fs.writeFileSync("error.log", logMessage, { flag: "a" }); // 'a' indica que deve ser anexado ao arquivo existente

          console.log(err, job.data);
        });
    } catch (err) {
      console.log(err);
    }
  });
});

// Outputs: /builtwith.json
export async function POST({ params, request }) {
  const dataValue = await request.json();
  const { name, whatsapp, network, type } = dataValue;

  try {
    const logMessage = `${new Date().toString()}: Dados do lead - ${JSON.stringify(
      dataValue
    )}\n`;
    fs.writeFileSync("leads-backup.log", logMessage, { flag: "a" }); // 'a' indica que deve ser anexado ao arquivo existente
    const refererDomain = request.headers.get("host");
    let target = "";

    if (refererDomain.toLowerCase().indexOf("digitalspark") > -1)
      target = "digitalspark";
    else if (refererDomain.toLowerCase().indexOf("rushmedia") > -1)
      target = "rushmedia";
    else if (refererDomain.toLowerCase().indexOf("zenova") > -1)
      target = "zenova";

    // Adiciona a mensagem à fila
    const job = queue.createJob({
      type: type,
      name: name,
      whatsapp: whatsapp,
      network: network,
      target: target,
    });

    job.save(function (err) {
      if (err) {
        console.log("job failed to save");
        throw new Error("Failed to save job");
      }
      console.log("saved job " + job.id);
    });

    return new Response(
      JSON.stringify({
        success: true,
      })
    );
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify({
        success: false,
      })
    );
  }
}
