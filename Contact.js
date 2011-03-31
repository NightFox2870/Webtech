/**
 * Created by Yarrith Devos
 * Date: 3/28/11
 * Time: 8:11 PM
 */

function valideerFormulier(formulierObject) {
    geldig = true;
    if (geldig) {
        geldig = valideer_string(formulierObject.naam.value, "naam");
    }
    if (geldig) {
        geldig = valideer_string(formulierObject.voornaam.value, "voornaam");
    }
    if (geldig) {
        geldig = valideer_eml(formulierObject.email.value, "email");
    }
    if (geldig) {
        formulierObject.submit();
    }
}

function valideer_string(tekst, type) {
    if (tekst.length == 0) {
        alert("Geen " + type + " ingevoerd!");
        return false;
    }
    var reg = new RegExp(/^([A-Z]){1}/)
    if (reg.exec(tekst) == null) {
        alert(type + " begint niet met een hoofdletter!");
        return false;
    }
    return true;
}

function valideer_eml(email) {
    if (email.length == 0) {
        alert("Geen email ingevoerd!");
        return false;
    }
    var reg = new RegExp(/^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})/)
    if (reg.exec(email) == null) {
        alert("Het e-mailadres heeft niet het formaat voorbeeld@iets.nogiets");
        return false;
    }
    return true;
}