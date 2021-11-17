
    function cpu() {

        if(quest1.value == "cpu" || quest1.value == "CPU" || quest1.value == "Cpu"){
        c_dualcore_cpu.style.display = "block"
        p_cpu.style.display = "block"
        u_cpu_ula.style.display = "block"
        num1.style.display = `none`
    } 
    else{
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"
    }
    }

    function rom() {
        if(quest5.value == "rom" || quest5.value == "ROM" || quest5.value == "Rom"){
        r_rom_registradores.style.display = "block"
        o_rom.style.display = "block"
        m_rom.style.display = "block"
        num5.style.display = `none`
    } 
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"

    }
    }

    function ram() {
        if(quest4.value == "ram" || quest4.value == "RAM" || quest4.value == "Ram"){

        r_registradores_ram.style.display = "block"
        a_ram.style.display = "block"
        m_ram.style.display = "block"
        num4.style.display = `none`
    } 
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"

    }
    }
    function ula() {
        if(quest2.value == "ula" || quest2.value == "ULA" || quest4.value == "Ula"){

        u_cpu_ula.style.display = "block"
        l_ula.style.display = "block"
        a_ula.style.display = "block"
        num2.style.display = `none`
    }
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"

    }
    }
    function i5() {
        if(quest13.value == "I5" || quest13.value == "i5"){

        i_registradores_i5.style.display = "block"
        i5_i5.style.display = "block"
        num13.style.display = `none`
    }
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"

    }
    }
    function i7() {
        if(quest14.value == "I7" || quest14.value == "i7"){

        i_memoria_i7.style.display = "block"
        i7_i7.style.display = "block"
        num14.style.display = `none`
    }
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"

    }
    }
    function cs() {
        if(quest10.value == "cs" || quest10.value == "CS" || quest10.value == "Cs"){

        c_cs.style.display = "block"
        s_registradores_cs.style.display = "block"
        num10.style.display = `none`
    }
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"

    }
    }
    function dma() {
        if(quest9.value == "dma" || quest9.value == "DMA" || quest9.value == "Dma"){

        d_dma.style.display = "block"
        m_dma.style.display = "block"
        a_dma_quadcore.style.display = "block"
        num9.style.display = `none`
    }
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"

    }
    }

    function quad() {
        if(quest16.value == "quad core" || quest16.value == "QUAD CORE" || quest16.value == "Quad Core"){

        q_quadcore.style.display = "block"
        u_quadcore.style.display = "block"
        a_dma_quadcore.style.display = "block"
        d_quadcore.style.display = "block"
        c_quadcore.style.display = "block"
        o_quadcore.style.display = "block"
        r_quadcore.style.display = "block"
        e_memoria_quadcore.style.display = "block"
        num16.style.display = `none`
    }
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"
    
    }
    }
    function memoria() {
        if(quest8.value == "memória de massa" || quest8.value == "MEMÓRIA DE MASSA" || quest8.value == "Memória de Massa"){

        m_memoria.style.display = "block"
        e_memoria_quadcore.style.display = "block"
        mm_memoria.style.display = "block"
        o_memoria.style.display = "block"
        r_memoria.style.display = "block"
        i_memoria_i7.style.display = "block"
        a_memoria.style.display = "block"
        d_de_dualcore.style.display = "block"
        e_de.style.display = "block"
        m_massa_eprom.style.display = "block"
        a_massa.style.display = "block"
        s_massa.style.display = "block"
        ss_massa.style.display = "block"
        a_massa_registradores.style.display = "block"
        num8.style.display = `none`
    }
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"

    }
    }
    function dual() {
        if(quest15.value == "dual core" || quest15.value == "DUAL CORE" || quest15.value == "Dual Core"){

        d_de_dualcore.style.display = "block"
        u_dualcore.style.display = "block"
        a_dualcore.style.display = "block"
        l_dualcore_flash.style.display = "block"
        c_dualcore_cpu.style.display = "block"
        o_dualcore.style.display = "block"
        r_dualcore.style.display = "block"
        e_dualcore.style.display = "block"
        num15.style.display = `none`
       
    }else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"

    }
    }
    function eprom() {
        if(quest6.value == "eprom" || quest6.value == "EPROM" || quest6.value == "Eprom"){

        e_eprom.style.display = "block"
        p_eprom.style.display = "block"
        r_eprom.style.display = "block"
        o_eprom.style.display = "block"
        m_massa_eprom.style.display = "block"
        num6.style.display = `none`
    
    }else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"
    }
    
    }
    function registradores() {
        if(quest3.value == "registradores" || quest3.value == "Registradores" || quest3.value == "REGISTRADORES"){

        r_rom_registradores.style.display = "block"
        e_registradores.style.display = "block"
        g_registradores.style.display = "block"
        i_registradores_i5.style.display = "block"
        s_registradores_cs.style.display = "block"
        t_registradores.style.display = "block"
        r_registradores_ram.style.display = "block"
        a_massa_registradores.style.display = "block"
        d_registradores.style.display = "block"
        o_registradores.style.display = "block"
        r_registradores.style.display = "block"
        e_adressbus_registradores.style.display = "block"
        s_registradores.style.display = "block"
        num3.style.display = `none`
    }
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"

    }
}    
function adress() {
    if(quest11.value == "address bus" || quest11.value == "ADDRESS BUS" || quest11.value == "Address Bus"){

        a_adressbus.style.display = "block"
        dd_adressbus.style.display = "block"
        d_adressbus.style.display = "block"
        r_adressbus.style.display = "block"
        e_adressbus_registradores.style.display = "block"
        s_adressbus.style.display = "block"
        ss_adressbus.style.display = "block"
        b_adressbus.style.display = "block"
        u_databus_adressbus.style.display = "block"
        sss_adressbus.style.display = "block"
        num11.style.display = `none`
    } 
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"
    
    }
}
    function data() {
    if(quest12.value == "data bus" || quest12.value == "DATA BUS" || quest12.value == "Data Bus"){

        d_databus.style.display = "block"
        a_databus.style.display = "block"
        t_databus.style.display = "block"
        aa_databus.style.display = "block"
        b_databus.style.display = "block"
        u_databus_adressbus.style.display = "block"
        s_databus.style.display = "block"
        num12.style.display = `none`
    }
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"
    
    }
    }
    function flash() {
    if(quest7.value == "flash" || quest7.value == "FLASH" || quest7.value == "Flash"){

        f_flash.style.display = "block"
        l_dualcore_flash.style.display = "block"
        a_flash.style.display = "block"
        s_flash.style.display = "block"
        h_flash.style.display = "block"
        num7.style.display = `none`

    }
    else {
        id_img.style.display = "block"
        div_ask.style.display = "none"
        container.style.display = "none"
        id_voltar.style.display = "block"
        div_msg_humilhando.style.display = "block"
    
    }
    }

    function voltar() {
        id_img.style.display = "none"
        div_ask.style.display = "block"
        container.style.display = "block"
        id_voltar.style.display = "none"
        div_msg_humilhando.style.display = "none"
    }