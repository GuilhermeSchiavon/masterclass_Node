console.log("Entrei no JS")
/* $('#tre_path_slider').change(function(e){
    var files = $('#tre_path_slider').prop("files")
    var names = $.map(files, function(val) { return val.name; });
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var date = day+"/"+month+"/"+year;
    newdate = year + "/" + month + "/" + day;
    $.each(names, function(index){
        $('#file_table').append('<tr><td><i class="bi bi-file-earmark-pdf"></i>'+names[index].split('.').slice(0,-1).join('.')+'</td><td>'+date+'</td><td><i class="bi bi-trash-fill" onclick="deleteFile(this);" id="delete_file" style="cursor:pointer;"></i></td></tr>');
    });
})

function deleteFile(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("file_table").deleteRow(i);
}

function btn_limpar_socio() {
    $('#form_socio')[0].reset();
    document.getElementById("soc_id").value = '';
}

function excluir_socio(soc_id) {
    Swal.fire({
    title: 'Deseja deletar este Sócio ?',
    text: 'Atenção: Esta ação não é reversivel',
    icon: 'warning',
    iconColor: '#d33',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Excluir'
    }).then((result) => {
        if (result.isConfirmed) {
            $(document).ready(function(e) {
                $.ajax({
                    url: "http://localhost/crm/index.php/clientes/excluir_socio/"+soc_id,
                    success: function(data) {
                if(data == 'sucess'){
                /* lista_socios(<?php echo $cliente['cli_id'] ?>); *//*
                Swal.fire(
                'Apagada com Sucesso!',
                'Empresa deletada com Sucesso !',
                'success'
                ).then((result) => {
                    if (result.isConfirmed) {
                        
                    }
                    })
                }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...Não foi possivel Deletar !'
                    })
                }
            },
            error: function(e) {
                console.log(e);
                Swal.fire(
                'Apagada com Sucesso!',
                'Empresa deletada com Sucesso !',
                'success'
                )
            }
            });
            });
        }
    })
}

function editar_socio(soc_id) {
    $(document).ready(function () {
        $.ajax({ 
            type: 'POST', 
            url: 'http://localhost/crm/index.php/clientes/select_socio', 
            data: '&soc_id='+soc_id,
            dataType: 'json',
            success: function (data) { 
                $.each(data, function(index, element) {
                    $('#soc_id').val(element.soc_id);
                    $('#soc_cli_id').val(element.soc_cli_id);
                    $('#soc_nome').val(element.soc_nome);
                    $('#soc_telefone').val(element.soc_telefone);
                    $('#soc_cpf').val(element.soc_cpf);
                    $('#soc_cargo').val(element.soc_cargo);
                });
            }
        });
    });
}

*//* lista_socios(<?php echo !empty($cliente)? $cliente['cli_id'] : ''; ?>); *//*

function lista_socios(cli_id) {
    $(document).ready(function(e) {
    $.ajax({
    url: "http://localhost/crm/index.php/clientes/lista_socios",
    type: "POST",
    data: '&cli_id='+cli_id,
    success: function(data) {
        $('#resultado').html(data);
    },
    error: function(e) {
        console.log(e);
    }
    });
    });

}														

function getFileData(myFile, d, type) {
    file = myFile.files[2];
    if (file !== undefined) {
        var idxDot = file.name.lastIndexOf(".") + 1;
        var ext = file.name.substr(idxDot, file.name.length).toLowerCase();
        if (ext == type) {
            var filename = file.name;
            document.getElementsByClassName("custom-file-label")[d].innerHTML = filename;
        } else {}
    }
}

function btn_cli_porte(size) {
    document.getElementById("cli_porte").value = size;
}

function btn_gravar_cliente() {
    $(document).ready(function(e) {
        $.ajax({
        url: "<?php echo base_url; ?>index.php/clientes/gravar_cliente",
        type: "POST",
        data:$('#form_cliente').serialize(),
        success: function(data) {
            if(data != 'error') {
                Swal.fire({
                    icon: 'success',
                    title: 'Gravado com Sucesso'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        id_cliente(data);
                        window.location.href = "<?php echo base_url();?>index.php/empresa"
                    }
                    })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...Algo deu errado !'
                    })
            }
        },
        error: function(e) {
        console.log(e);
        }
        });
    });
    }

    function btn_gravar_socio() {
    $(document).ready(function(e) {
        $.ajax({
        url: "http://localhost/crm/index.php/clientes/gravar_socio",
        type: "POST",
        data:$('#form_socio').serialize(),
        success: function(data) {
            if(data == 'sucess') {
                *//* lista_socios(<?php echo $cliente['cli_id']?>); */ /*
                Swal.fire({
                    icon: 'success',
                    title: 'Gravado com Sucesso'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "<?php echo base_url();?>index.php/empresa"
                    }
                    })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...Algo deu errado !'
                    })
            }
        },
        error: function(e) {
        console.log(e);
        }
        });
    });
    } */