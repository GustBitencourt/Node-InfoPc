const os = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100;
    
    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalMem: `${parseInt(tRam)} MB`,
        Freemem: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)} %`
    }

    /* Limpa o console antes de enviar nova mensagem */
    console.clear();
    console.table(stats);

    //exportando informações de stats
    exports.stats = stats;    
}, 1000);

