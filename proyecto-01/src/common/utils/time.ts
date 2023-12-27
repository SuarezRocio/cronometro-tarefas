export function tempoParaSegundos(tempo: string){
    const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":")
tempo.split(":");


const horasEnSegundos = Number(horas) * 3600;
const minutosEnSegundos = Number(minutos) * 60;
return horasEnSegundos+ minutosEnSegundos + Number(segundos);
}