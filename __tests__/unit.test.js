// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone Number 1', () => {
    expect(functions.isPhoneNumber('123-123-1231')).toBe(true);
  });

test('Phone Number 2', () => {
    expect(functions.isPhoneNumber('123-123-1232')).toBe(true);
  });

test('Phone Number 3', () => {
    expect(functions.isPhoneNumber('123-123-12w')).toBe(false);
  });

test('Phone Number 4', () => {
    expect(functions.isPhoneNumber('12#12-3-1231')).toBe(false);
  });

  test('Email 1', () => {
    expect(functions.isEmail("ucsd@ucsd.edu")).toBe(true);
  });

test('Email 2', () => {
    expect(functions.isEmail("ucsd@ucsd.edu")).toBe(true);
  });

test('Email 3', () => {
    expect(functions.isEmail("ucsd@ucsd.u")).toBe(false);
  });
  
test('Email 4', () => {
    expect(functions.isEmail("ucsdducsd.edu")).toBe(false);
  });

  test('Password 1', () => {
    expect(functions.isStrongPassword('asdfg234567')).toBe(true);
  });

test('Password 2', () => {
    expect(functions.isStrongPassword('dsdfg2e567')).toBe(true);
  });

test('Password 3', () => {
    expect(functions.isStrongPassword('7sdfg234567')).toBe(false);
  });
  
test('Password 4', () => {
    expect(functions.isStrongPassword('d')).toBe(false);
  });

  test('Date 1', () => {
    expect(functions.isDate('01/01/2001')).toBe(true);
  });

test('Date 2', () => {
    expect(functions.isDate('10/01/2201')).toBe(true);
  });

test('Date 3', () => {
    expect(functions.isDate('0101/2001')).toBe(false);
  });
  
test('Date 4', () => {
    expect(functions.isDate('/01/2001')).toBe(false);
  });

  test('Color 1', () => {
    expect(functions.isHexColor('#FFF000')).toBe(true);
  });

test('Color 2', () => {
    expect(functions.isHexColor('#000FFF')).toBe(true);
  });

test('Color 3', () => {
    expect(functions.isHexColor('@00FFF')).toBe(false);
  });
  
test('Color 4', () => {
    expect(functions.isHexColor('#0')).toBe(false);
  });