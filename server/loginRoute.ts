

import {User} from '../app/shared/model/user';

const auth = {
    'hong@test.com': 'test1234',
    'bill@gmail.com': 'test456'

};

const users: {[key: string]: User} = {
    'hong@test.com': {
        firstName: 'John'
    },
    'bill@gmail.com': {
        firstName: 'Bill'
    }
};

export function loginRoute(req, res) {


    const payload = req.body;

    console.log('verifying password ...', payload);


    if (auth[payload.email] && auth[payload.email] === payload.password) {
        res.status(200).json(users[payload.email]);
    } else {
        res.sendStatus(500);
    }




}
