// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let PasswordVariable='';
    if (options.includeUppercase) PasswordVariable += uppercase;
    if (options.includeLowercase) PasswordVariable += lowercase;
    if (options.includeNumbers) PasswordVariable += numbers;
    if (options.includeSpecialChars) PasswordVariable += specialChars;

    if (PasswordVariable === ''){
        alert ('Dimohon Memilih Satu atau Lebih Kategori');
        return '';
    }

    if (length < 8 || length > 128) {
        alert ('Password Terlalu Sedikit atau Banyak');
        return '';
    }
    
    // TODO: Generate the password based on the selected criteria
    let password = '';
    for (let i = 0; i < length; i+=1) {
        const randomVariable = Math.floor(Math.random() * PasswordVariable.length);
        password += PasswordVariable[randomVariable];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
    document.getElementById('generateBtn').addEventListener('click',function() {
    const length = parseInt(document.getElementById('length').value);

    const options ={
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked
    };
    const password = generatePassword(length,options);
    document.getElementById('passwordOutput').innerText=password;
});
// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click',function() {
    const password = document.getElementById('passwordOutput').innerText;
    if (password) {
        navigator.clipboard.writeText(password).then(() =>{
            alert('Password Copied to Clipboard');
        })
    }
});
