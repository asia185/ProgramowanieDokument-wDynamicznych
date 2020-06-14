var data = [];
data[0]="NULL";
table_len=0;

function isFloat(x) { return !!(x % 1); };

function sprawdzanie_nazwy()
{
    valid_ok=true;
    var nazwa_towaru=document.getElementById("nazwa_towaru").value;
    if (nazwa_towaru == '')
    {
      document.getElementById("blad_nazwa_towaru").innerHTML = "Pole obowiązkowe";
      var nazwa_towaru=document.getElementById("nazwa_towaru")
      nazwa_towaru.classList.add("is-invalid");
      valid_ok=false;
    }
    else if(!(nazwa_towaru.match(/^[a-zA-Z]+$/)))
    {
        document.getElementById("blad_nazwa_towaru").innerHTML = "Nazwa może składać się wyłącznie z liter";
        var nazwa_towaru=document.getElementById("nazwa_towaru")
        nazwa_towaru.classList.add("is-invalid");
        valid_ok=false;
    }
    else if(nazwa_towaru.length>10)
    {
        document.getElementById("blad_nazwa_towaru").innerHTML = "Maksymalna liczba znaków nazwy to 10";
        var nazwa_towaru=document.getElementById("nazwa_towaru")
        nazwa_towaru.classList.add("is-invalid");
        valid_ok=false;
    }
    else
    {
        document.getElementById("blad_nazwa_towaru").innerHTML = "<font size='1' color='green'>Nieziemsko!</font>";
        var nazwa_towaru=document.getElementById("nazwa_towaru");
        nazwa_towaru.classList.remove("is-invalid");
        nazwa_towaru.classList.add("is-valid");
    }
    if(valid_ok==true)
    {
        size=data.length;
        for(i=0;i<size;i++)
        {
            if(data[i]==nazwa_towaru.value)
            {
                document.getElementById("blad_nazwa_towaru").innerHTML = "Ten produkt juz istnieje";
                var nazwa_towaru=document.getElementById("nazwa_towaru")
                nazwa_towaru.classList.add("is-invalid");
                valid_ok=false;
            }
        }
    }
    return valid_ok;
}

function sprawdzanie_kod_towaru()
{
    valid_ok=true;
    var kod_towaru=document.getElementById("kod_towaru").value
    if ((!(kod_towaru.match(/^[a-zA-Z0-9]{2}\-{1}[a-zA-Z0-9]{2}?$/g))) && (kod_towaru!=''))
       {
            document.getElementById("blad_kod_towaru").innerHTML = "format XX-XX cyfry i litery";
            var kod_towaru=document.getElementById("kod_towaru");
            kod_towaru.classList.add("is-invalid");
            valid_ok=false;
       }
    else if(kod_towaru=='')
       {
            document.getElementById("blad_kod_towaru").innerHTML = "Pole obowiązkowe";
            var kod_towaru=document.getElementById("kod_towaru");
            kod_towaru.classList.add("is-invalid");
            valid_ok=false;
       }
    else
        {
            document.getElementById("blad_kod_towaru").innerHTML = "<font size='1' color='green'>Doskonale!</font>";
            var kod_towaru=document.getElementById("kod_towaru");
            kod_towaru.classList.remove("is-invalid");
            kod_towaru.classList.add("is-valid");
        }
        return valid_ok;
}

function sprawdzanie_cena_netto()
{
    valid_ok=true;
    var cena_netto=document.getElementById("cena_netto").value
    if (cena_netto=='')
    {
        document.getElementById("blad_cena_netto").innerHTML = "Pole obowiązkowe";
        var cena_netto=document.getElementById("cena_netto");
        cena_netto.classList.add("is-invalid");
        valid_ok=false;
        document.getElementById("cena_brutto").value = "<font size='1' color='green'>Rewelacja!</font>";
    }
   else
   {
       if(!(cena_netto.match(/^\d+(\.\d+)?$/)))
          {
            document.getElementById("blad_cena_netto").innerHTML = "Możesz wpisać tylko liczby";
            var cena_netto=document.getElementById("cena_netto");
            cena_netto.classList.add("is-invalid");
            valid_ok=false;
            document.getElementById("cena_brutto").value = "<font size='1' color='green'>Rewelacja!</font>";
          }
        else
        {
        cena_netto=parseFloat(cena_netto);
            document.getElementById("cena_netto").value = cena_netto.toFixed(2);
            document.getElementById("blad_cena_netto").innerHTML = "";
            var cena_netto=document.getElementById("cena_netto");
            cena_netto.classList.remove("is-invalid");
            cena_netto.classList.add("is-valid");
            if(stawka_vat=document.getElementById("stawka_vat").value!="<font size='1' color='green'>Rewelacja!</font>")
            brutto();
        }
   }
   return valid_ok;
}

function brutto()
{
    stawka_brutto=0;
    var stawka_vat=document.getElementById("stawka_vat").value
    stawka_vat=parseFloat(stawka_vat);
    var cena_netto=document.getElementById("cena_netto").value
    cena_netto=parseFloat(cena_netto);
    if(cena_netto!='' && stawka_vat!='')
    {
        stawka_brutto=cena_netto+(cena_netto*(stawka_vat/100));
    }
    document.getElementById("cena_brutto").value = stawka_brutto.toFixed(2);
    return stawka_brutto;
}

function sprawdzanie_stawka_vat()
{
    valid_ok=true;
    var stawka_vat=document.getElementById("stawka_vat").value;
    if (stawka_vat=='')
    {
        document.getElementById("blad_stawka_vat").innerHTML = "Pole obowiązkowe";
        var stawka_vat=document.getElementById("stawka_vat");
        stawka_vat.classList.add("is-invalid");
        valid_ok=false;
        document.getElementById("cena_brutto").value = " ";
    }
    else if(!(stawka_vat.match(/^\d+(\.\d+)?$/)))
    {
        document.getElementById("blad_stawka_vat").innerHTML = "Możesz wpisać tylko liczby";
        var stawka_vat=document.getElementById("stawka_vat");
        stawka_vat.classList.add("is-invalid");
        valid_ok=false;
        document.getElementById("cena_brutto").value = "";
    }
    else
    {
        document.getElementById("blad_stawka_vat").innerHTML = "<font size='1' color='green'>Świetnie!</font>";
        var stawka_vat=document.getElementById("stawka_vat");
        stawka_vat.classList.remove("is-invalid");
        stawka_vat.classList.add("is-valid");
        brutto();
    }

    return valid_ok;
}

function sprawdzanie_kategoria()
{
    valid_ok=true;
    var element = document.getElementById("kat");
    var elementValue = element.value;
    if(elementValue == "-1")
     {
         document.getElementById("blad_kategoria").innerHTML = "Wybierz przynajmniej jedną kategorię";
         var element = document.getElementById("kat");
         element.classList.add("is-invalid");
         valid_ok=false;
     }
    else
    {
        document.getElementById("blad_kategoria").innerHTML = "<font size='1' color='green'>Tak trzymaj!</font>";
        var element = document.getElementById("kat");
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
    }
    return valid_ok;
}
function sprawdzanie_opcja()
{
   $("input[type=checkbox]");
   valid_ok=true;
   var counter=0;
   if($('#1').is(':checked'))
       counter++;
   if($('#2').is(':checked'))
       counter++;
   if($('#3').is(':checked'))
       counter++;
   if($('#4').is(':checked'))
       counter++;
   if($('#5').is(':checked'))
       counter++;
   if(counter<2)
   {
       document.getElementById("blad_opcja").innerHTML = "Wybierz przynajmniej dwie opcje";
       valid_ok=false;
   }
   else
   {
       document.getElementById("blad_opcja").innerHTML = "<font size='1' color='green'>Fantastycznie!</font>";
       valid_ok=true;
   }
   return valid_ok;
}
function sprawdzanie_ocena()
{
    valid_ok=true;
    var how=$('input[type=radio]:checked').length;
    if(how==0)
    {
        document.getElementById("blad_ocena").innerHTML = "Wybierz przynajmniej jedną ocenę";
        valid_ok=false;
    }
    else
    {
        document.getElementById("blad_ocena").innerHTML = "<font size='1' color='green'>Cudownie!</font>";
        valid_ok=true;
    }
    return valid_ok;
}

function appendData() {
    document.getElementById("info").innerHTML = "";
    err=0;
    size=data.length;
    if(sprawdzanie_nazwy()==false)
    {
        // alert("Podaj poprawną nazwę towaru");
        err++;
    }
    else
    {
        nazwa_towaru=document.getElementById("nazwa_towaru").value;
        if(data[size-1]!=nazwa_towaru)
        {
            data[size]=nazwa_towaru;

        }
        if(data[size-1]==nazwa_towaru)
        {

            document.getElementById("blad_nazwa_towaru").innerHTML = "Produkt już istnieje. Sprawdź";
            var nazwa_towaru=document.getElementById("nazwa_towaru")
            nazwa_towaru.classList.add("is-invalid");
            valid_ok=false;
            err++;
        }
    }
    if(sprawdzanie_kod_towaru()==false)
        {err++;}
    if(sprawdzanie_cena_netto()==false)
        {err++;}
    if(sprawdzanie_stawka_vat()==false)
       {err++;}
    if(sprawdzanie_kategoria()==false)
        {err++;}
    if(sprawdzanie_opcja()==false)
        {err++;}
    if(sprawdzanie_ocena()==false)
        {err++; }
        if(err==0)
        {
        nazwa_towaru=document.getElementById("nazwa_towaru").value;
        kod_towaru=document.getElementById("kod_towaru").value;
        cena_netto=document.getElementById("cena_netto").value;
        stawka_vat=document.getElementById("stawka_vat").value;
        nazwa_zdjecia=document.getElementById("nazwaZdjecia").value;
        var e = document.getElementById("kat");
        var kategoria = e.options[e.selectedIndex].value;
        var checkboxes = document.getElementsByName('chbx');
        var opcja = "";
        for (var i=0, n=checkboxes.length;i<n;i++)
        {
            if (checkboxes[i].checked)
            {
                opcja += ","+checkboxes[i].value;
            }
        }
        if (opcja)opcja = opcja.substring(1);
        var radios = document.getElementsByName('optradio');
        ocena="";
        for (var i = 0, length = radios.length; i < length; i++)
        {
            if (radios[i].checked)
            {
             ocena=radios[i].value;
            }
        }
       brutto1=brutto();

        var tdTagStart = '<td>';
        var tdTagEnd = '</td>';
        table_len++;

        for(var i = 0; i < 1; i++) {
          var rnd = i % 2;
                var row = "<tr class='item'"+"id='row"+table_len+"'>";
                row += '<td '+"id='nazwa_towaru"+table_len+"'>" + nazwa_towaru + tdTagEnd;
                row += '<td '+"id='kod_towaru"+table_len+"'>" + kod_towaru + tdTagEnd;
                row += '<td '+"id='cena_netto"+table_len+"'>" + cena_netto + tdTagEnd;
                row += '<td '+"id='stawka_vat"+table_len+"'>" + stawka_vat + tdTagEnd;
                row += '<td '+"id='brutto1"+table_len+"'>" + brutto1 + tdTagEnd;
                row += '<td '+"id='kategoria"+table_len+"'>" + kategoria+ tdTagEnd;
                row += '<td '+"id='opcja"+table_len+"'>"+ opcja + tdTagEnd;
                row += '<td '+"id='ocena"+table_len+"'>" + ocena + tdTagEnd;
                row += '<td '+"id='nazwaZdjecia"+table_len+"'>" + nazwa_zdjecia + tdTagEnd;
                row+=tdTagStart+"<input type='button' id='edycja_button"+table_len+"' value='Edytuj' class='edycja' onclick='edycja_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' style='display:none;' value='Save' class='save' onclick='save_row("+table_len+")' > <input class='w3-input' type='button' value='Usuń' class='delete' onclick='delete_row("+table_len+")'>"+tdTagEnd;
                row += '</tr>';
                $("table/tbody:first").append(row);
        };
        $("#myTable").trigger('update');
    }
        return false;
}

function button_sprawdzanie()
{
    err=0;
    if(sprawdzanie_nazwy()==false)
        {err++;}
    if(sprawdzanie_kod_towaru()==false)
        {err++;}
    if(sprawdzanie_cena_netto()==false)
        {err++;}
    if(sprawdzanie_stawka_vat()==false)
       {err++;}
    if(sprawdzanie_kategoria()==false)
        {err++;}
    if(sprawdzanie_opcja()==false)
        {err++;}
    if(sprawdzanie_ocena()==false)
        {err++; }
    if(err==0)
    {
        appendData();
    }
    else
    {
        document.getElementById("allCorrect").innerHTML = "";
    }
}
$(document).ready(function() {

    $("#myTable").tablesorter({
        headers: {
            1: {
                sorter: false
            },
            3: {
                sorter: false
            },
            4: {
                sorter: false
            },
            5: {
                sorter: false
            },
            6: {
                sorter: false
            },
            8: {
                sorter: false
            }
        }
    });
    $("#cenaODnajn").click(function() {
        var sorting = [[2,0]];
        $("#myTable").trigger("sorton",[sorting]);
        return false;
    });
    $("#cenaODnajw").click(function() {
        var sorting = [[2,1]];
        $("#myTable").trigger("sorton",[sorting]);
        return false;
    });

    $("#ocenaODnajn").click(function() {
        var sorting = [[7,0]];
        $("#myTable").trigger("sorton",[sorting]);
        return false;
    });
    $("#ocenaODnajw").click(function() {
        var sorting = [[7,1]];
        $("#myTable").trigger("sorton",[sorting]);
        return false;
    });
    $("#nazwaODa").click(function() {
        var sorting = [[0,0]];
        $("#myTable").trigger("sorton",[sorting]);
        return false;
    });
    $("#nazwaODz").click(function() {
        var sorting = [[0,1]];
        $("#myTable").trigger("sorton",[sorting]);
        return false;
    });
});
function show()
{
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function edycja_row(no)
{
    document.getElementById("info").innerHTML = "";
    document.getElementById("edycja_button"+no).style.display="none";
    nazwa_towaru=document.getElementById("nazwa_towaru"+no);
    kod_towaru=document.getElementById("kod_towaru"+no);
    cena_netto=document.getElementById("cena_netto"+no);
    stawka_vat=document.getElementById("stawka_vat"+no);
    kategoria = document.getElementById("kategoria"+no);
    opcja = document.getElementById("opcja"+no);
     ocena = document.getElementById("ocena"+no);
     nazwa_zdjecia=document.getElementById("nazwaZdjecia"+no);

    document.getElementById("nazwa_towaru").value=nazwa_towaru.innerHTML;
    document.getElementById("kod_towaru").value=kod_towaru.innerHTML;
    document.getElementById("cena_netto").value=cena_netto.innerHTML;
    document.getElementById("stawka_vat").value=stawka_vat.innerHTML;
    document.getElementById("nazwaZdjecia").value=nazwa_zdjecia.innerHTML;
    var kategoria_dropdown_list = document.getElementById('kat');
    kategoria_dropdown_list.value = kategoria.innerHTML;
    checkbox = document.getElementsByName("chbx");
    var values = opcja.innerHTML.split(",");
    for(i=0;i<=5;i++)
    {
        for(j=0;j<values.length;j++)
        {
            if(j==5 || i==5)
                break;
            if (checkbox[i].value==values[j])
            {
                checkbox[i].checked = true;
                checkbox[i].setAttribute("checked", "true");
                break;
            }
            else
            {
                checkbox[i].checked = false;
                checkbox[i].setAttribute("checked", "false");
            }
        }
    }
    radio = document.getElementsByName("optradio");
    var values = ocena.innerHTML;
    for (var i=0, n=values.length;i<n;i++)
    {
        for(j=1;j<=5;j++)
        {
            if (values[i]==j)
            {
                radio[j-1].checked = true;
                radio[j-1].setAttribute("checked", "true");
            }
        }
    }
    document.getElementById("submit1").style.display="none";
    document.getElementById("save").innerHTML = "<input type='button'  class='btn btn-info' id='save_button"+no+"' style='' value='Edytuj Produkt...' class='save' onclick='save_row("+no+")'>";
}
function save_row(no)
{
    err=0;
    document.getElementById("info").innerHTML = "";

    if(sprawdzanie_kod_towaru()==false)
        err++;
    if(sprawdzanie_cena_netto()==false)
        err++
    if(sprawdzanie_stawka_vat()==false)
       err++;
    if(sprawdzanie_kategoria()==false)
        err++;
    if(sprawdzanie_opcja()==false)
        err++;

    if(sprawdzanie_ocena()==false)
       err++;

    if(err==0)
    {
        document.getElementById("save").innerHTML ="";
        document.getElementById("edycja_button"+no).style.display="block";
        document.getElementById("submit1").style.display="block";
        var nazwa_towaru=document.getElementById("nazwa_towaru").value;
        var kod_towaru=document.getElementById("kod_towaru").value;
        var cena_netto=document.getElementById("cena_netto").value;
        var stawka_vat=document.getElementById("stawka_vat").value;
        var cena_brutto=document.getElementById("cena_brutto").value;
        var e = document.getElementById("kat");
        var kategoria = e.options[e.selectedIndex].value;
        var checkboxes = document.getElementsByName('chbx');
        var opcja = "";
        for (var i=0, n=checkboxes.length;i<n;i++)
        {
            if (checkboxes[i].checked)
            {
                opcja += ","+checkboxes[i].value;
            }
        }
        if (opcja)opcja = opcja.substring(1);
        var radios = document.getElementsByName('optradio');
        ocena="";
        for (var i = 0, length = radios.length; i < length; i++)
        {
            if (radios[i].checked)
            {
            ocena=radios[i].value;
            }
        }
        var nazwa_zdjecia=document.getElementById("nazwaZdjecia").value;
        document.getElementById("nazwa_towaru"+no).innerHTML=nazwa_towaru;
        document.getElementById("kod_towaru"+no).innerHTML=kod_towaru;
        document.getElementById("cena_netto"+no).innerHTML=cena_netto;
        document.getElementById("stawka_vat"+no).innerHTML=stawka_vat;
        document.getElementById("kategoria"+no).innerHTML=kategoria;
        document.getElementById("brutto1"+no).innerHTML=cena_brutto;
        document.getElementById("opcja"+no).innerHTML=opcja;
        document.getElementById("ocena"+no).innerHTML=ocena;
        document.getElementById("nazwaZdjecia"+no).innerHTML=nazwa_zdjecia;
        data[no]=nazwa_towaru;
        $("#myTable").trigger('update');
    }

}

function usuwanie(no)
{
    document.getElementById("info").innerHTML = "<div class='alert alert-success'><strong>Sukces!</strong> Produkt został usunięty </div>"
    data[no]="";
    document.getElementById("row"+no+"").outerHTML="";
    $("#myTable").trigger('update');
}

function zapisywanieStorage() {
    var items = document.getElementsByClassName("item");
    var storageLength = localStorage.length;
    for (i = 1; i <= items.length; i++) {
        nazwa_towaru=data[i];
        console.log("zapisano: "+nazwa_towaru);
        localStorage.setItem(storageLength+i,nazwa_towaru);
    }
    document.getElementById("info").innerHTML ="<center><div class=\"alert\" style=\"text-align:center\"> <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span><center><strong>Sukces!</strong> Localstorage zostały załadowane!</div></center>";
}
