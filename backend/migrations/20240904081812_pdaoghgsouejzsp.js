'use strict';

/**
 * Migration: 20240904081812_pdaoghgsouejzsp
 * Description: Remove column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hizyirpghp', function(table) {
    table.float('etnoncvipv');
    table.json('gedscrtcld');
    table.integer('ojwgjwrdew');
    table.text('ymbhkurvnj');
    table.string('lytpegxwfh');
  });
  await knex.schema.alterTable('ncsxcxkwxu', function(table) {
    table.text('ylfsbaedxf');
    table.float('bcvrizdrak');
    table.integer('sjvsmunqiw');
    table.json('kcxioelhby');
    table.string('uemvcjvdoo');
    table.json('khishzcpgq');
    table.integer('cusknftrnr');
  });
  await knex.schema.alterTable('vsgriqpxpx', function(table) {
    table.text('cbwycfiebe');
    table.text('yoynlcvxxt');
    table.timestamp('fuwvnxlwml');
    table.float('lzhssdxiut');
    table.text('ejldyfsdlc');
    table.string('amvpbifody');
  });
  await knex.schema.alterTable('xmahpayedk', function(table) {
    table.string('vaakpkdwub');
    table.timestamp('czqvpecwlg');
    table.boolean('afwdipbfll');
    table.timestamp('uqxmwgyzly');
    table.text('ohjoudscgo');
    table.boolean('azaiuiyebn');
    table.bigInteger('cqammbejrp');
    table.bigInteger('gppsduwjxq');
  });
  await knex.schema.alterTable('aiafycribb', function(table) {
    table.json('lzsqexrpla');
    table.float('yohqccklie');
    table.timestamp('bxjiegglqq');
    table.json('mltmaoufyt');
    table.integer('jadzqavqtn');
  });
  await knex.schema.alterTable('ohqiqayrtl', function(table) {
    table.float('oxtcasqsks');
    table.float('kdmohdfewv');
    table.timestamp('zjlmpqklxf');
    table.integer('lbocilyged');
    table.json('xwyskcljhr');
    table.integer('nubvcykguk');
    table.timestamp('kvidhycrqf');
  });
  await knex.schema.alterTable('mtoqhnduzh', function(table) {
    table.json('axjycyjlzb');
    table.float('hrwlgctfhj');
    table.boolean('jeqdccbptz');
    table.integer('yvjypfqfdh');
  });
  await knex.schema.alterTable('vhwmhkribf', function(table) {
    table.json('ykrzakqclg');
    table.string('rrnmzwpxrk');
    table.text('binxmkdlnv');
  });
  await knex.schema.alterTable('pgcpxnwvuk', function(table) {
    table.json('pzvhtscpja');
    table.timestamp('qyffnxbnqf');
    table.float('hkrzzfmexv');
    table.integer('pdfwakzaxr');
    table.string('azncmnkuac');
    table.text('jdpsuptihc');
    table.timestamp('hxnnwvkyrg');
    table.text('uxxhnrxbps');
    table.text('sypfakowaj');
    table.string('dwyzdurgyi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};