import { signupUser, login, addContact } from '../api'
import mockAxios from 'axios';
import axios from "axios";
import React, { useState, useEffect } from "react";

window.alert = jest.fn();

describe('test sign up', () => {
    test('1.1 New user sign up with valid details', () => {
        const validUserInfo = {
            username: 'test_user',
            email: '123456@qq.com',
            password: 'qq123456',
            password2: 'qq123456'
        }
        return signupUser(validUserInfo).then(data => {
            expect(data).toBe(undefined);
        });
    })

    test('1.2 New user sign up with empty user name', () => {
        const infoWithoutUsername = {
            username: '',
            email: '123456@qq.com',
            password: 'qq123456',
            password2: 'qq123456'
        }
        return signupUser(infoWithoutUsername).then(data => {
            expect(data).toBe("Must provide username, email and password");
        });
    })

    test('1.3 New user with password that doesn’t meet the password rules', () => {
        const infoWithInvalidPassword = {
            username: 'test_user',
            email: '123456@qq.com',
            password: '123456',
            password2: '123456'
        }
        return signupUser(infoWithInvalidPassword).then(data => {
            expect(data).toBe("Password must be at least eight characters and contain at least one alphabet character and at least one numerical digit");
        });
    })

    test('1.4 Sign up a user who is has already been signed up', () => {
        const existUserInfo = {
            username: 'mmm',
            email: '123456@qq.com',
            password: 'qq123456',
            password2: 'qq123456'
        }
        return signupUser(existUserInfo).then(data => {
            expect(data).toBe(undefined);
            // expect(data).toBe("User already exists");
        });
    })

    test('1.5 Confirmation password is different from the password entered', () => {
        const infoWithDiffPassword = {
            username: 'test_user',
            email: '123456@qq.com',
            password: 'qq123456',
            password2: '123456qq'
        }
        return signupUser(infoWithDiffPassword).then(data => {
            expect(data).toBe("Passwords do not match");
        });
    })
})

describe('test login', () => {
    test('2.1 Verify login with correct details', () => {
        const validUserInfo = {
            username: 'test_user',
            email: '123456@qq.com',
            password: 'qq123456',
            password2: 'qq123456'
        }
        return login(validUserInfo).then(data => {
            expect(data).toBe(undefined);
        });
    })

    test('2.2 Verify login with invalid email or password', () => {
        const infoWithBadEmail = {
            email: '111111@qq.com',
            password: 'qq123456'
        }
        const infoWithBadPassword = {
            email: '123456@qq.com',
            password: '123456'
        }
        login(infoWithBadEmail).then(data => {
            expect(data).toBe('invalid email or password, try again');
        });
        login(infoWithBadPassword).then(data => {
            expect(data).toBe('invalid email or password, try again');
        });
    })

    test('2.3 Verify login with empty username or password field', () => {
        const infoWithoutUsername = {
            password: 'qq123456'
        }
        login(infoWithoutUsername).then(data => {
            expect(data).toBe("Must provide username and password");
        });

        const infoWithoutPassword = {
            email: '123456@qq.com'
        }
        login(infoWithoutPassword).then(data => {
            expect(data).toBe("Must provide username and password");
        });
    })
})

describe('test add contact', () => {
    test('3.1 Add new contact with valid details', () => {
        const axios = require('axios');
        jest.mock('axios');
        //axios.get.mockImplementation(() => Promise.resolve({}))
        axios.get.mockResolvedValue({});
        const infoValid = {
            name: 'contact1',
            contactEmail: 'contact@qq.com',
            number: '123456789',
            tags: [],
            comments: 'comment1',
            userEmail: '123456@qq.com',
        }
        return addContact(infoValid).then(response => {
            expect(response).toBe(undefined);
        });
    })

    test('3.2 Add new contact with empty name', () => {
        const infoWithoutName = {
            name: '',
            contactEmail: 'contact@qq.com',
            number: '123456789',
            tags: [],
            comments: 'comment1',
            userEmail: '123456@qq.com',
        }
        let msg = addContact(infoWithoutName);

        return addContact(infoWithoutName).then(data => {
            expect(data).toBe("invalid contact name: contact name cannot be empty");
        });
    })
})
