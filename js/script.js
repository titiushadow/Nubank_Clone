function formatar(mascara, documento){
    const i = documento.value.length;
    const saida = mascara.substring(0,1);
    const texto = mascara.substring(i)
    
    if (texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1);
    }
}