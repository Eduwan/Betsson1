// standard user
export const standard = {
    username: 'standard_user',
    password: 'secret_sauce'
};

// user with wrong password
export const wrong = {
    username: 'standard_user',
    password: 'wrong_password'
};

// user locked
export const locked = {
    username: 'locked_out_user',
    password: 'secret_sauce'
};

// user with empty credentials
export const empty = {
    username: '',
    password: ''
};

// user containing upper cases in username
export const upperUser = {
    username: 'STANDARD_USER',
    password: 'secret_sauce'
};

// user containing upper cases in password
export const upperPass = {
    username: 'standard_user',
    password: 'Secret_Sauce'
};