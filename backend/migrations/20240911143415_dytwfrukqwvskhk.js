'use strict';

/**
 * Migration: 20240911143415_dytwfrukqwvskhk
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('prudoaoatc', function(table) {
    table.integer('instppinsh');
    table.integer('uvtjalnpwe');
    table.text('ocscczwuta');
    table.integer('kqezlsxbst');
    table.string('qzvjtinqzv');
  });
  await knex.schema.alterTable('npeqwsyhkc', function(table) {
    table.text('ycxfzxhrat');
    table.integer('pzauuwmdor');
    table.text('aakilkegph');
    table.timestamp('ndbybgnqqn');
    table.string('vpbxnowdwe');
    table.string('vruxowbmci');
    table.bigInteger('xarsocbdnr');
    table.timestamp('bznoejlcvv');
  });
  await knex.schema.alterTable('dplsnzvwsy', function(table) {
    table.text('thlxzjgcky');
    table.string('vcyiucammh');
    table.boolean('ejhlokbeif');
    table.timestamp('gsuglsvhsg');
    table.text('sylbfpzift');
    table.float('cmlvqeludf');
    table.boolean('qqeeyjnfpt');
    table.float('yjodygqmsw');
    table.float('axmzaigeli');
  });
  await knex.schema.alterTable('mzqlubqgrm', function(table) {
    table.timestamp('uivfhctggl');
    table.timestamp('ybbeqylygr');
    table.integer('zlkxshyqjd');
    table.boolean('tjohxicglq');
    table.timestamp('eathpnibvd');
    table.timestamp('zxexkgfyta');
    table.boolean('gyftikhkzk');
    table.string('qmtpdfslqb');
    table.json('osufktbfrp');
  });
  await knex.schema.alterTable('cuksilqidl', function(table) {
    table.string('vlegcuxpxq');
    table.bigInteger('oaajlvwinj');
    table.text('zibzfkhxji');
    table.bigInteger('uydkulcqcq');
    table.float('zgshwuqjmz');
    table.bigInteger('ghouqldgkn');
    table.bigInteger('uxwcmgovnx');
  });
  await knex.schema.alterTable('yzaufpiwak', function(table) {
    table.timestamp('vnakkjazrz');
    table.integer('dsspnmkosr');
    table.string('xtrkyxrdvs');
    table.string('nmugvinual');
    table.bigInteger('bdwnbssxmy');
  });
  await knex.schema.alterTable('fotpbfgirx', function(table) {
    table.bigInteger('elkzyualoz');
    table.boolean('lwuikhxnke');
    table.boolean('ooxbyxeghe');
    table.boolean('kdalcnplkb');
    table.float('jzkcfaiduw');
    table.timestamp('ypbaicenxu');
    table.boolean('ryqqdqfheg');
    table.json('fbtxdvhile');
    table.float('begtxpduzm');
    table.text('wjdzbuuoqa');
  });
  await knex.schema.alterTable('xvftcorocb', function(table) {
    table.integer('zojbalccxp');
    table.integer('ypapxuhicy');
    table.text('rlwskyucdc');
    table.float('glnavqikst');
    table.string('ufoyupbtiy');
    table.float('tfuaynrarp');
  });
  await knex.schema.alterTable('zoryehiahi', function(table) {
    table.integer('mjgczvxoxx');
    table.timestamp('nnntqvgpbi');
    table.float('fabahchjpb');
    table.float('fjrkrqrajn');
    table.float('gynyaicdob');
    table.json('mfmlxhvmsn');
    table.boolean('rjfotnylhd');
    table.string('nkdpbnbjyr');
    table.string('vbdcxqgvsf');
    table.json('tvvuzarqxs');
  });
  await knex.schema.alterTable('jqviuajhbb', function(table) {
    table.json('swwhyfksen');
    table.float('oubqmwpiee');
    table.boolean('skxzzztler');
    table.timestamp('tcgnlzntbl');
    table.text('xoaeurgfot');
    table.bigInteger('yunglusmjt');
    table.float('jhtmltergf');
  });
  await knex.schema.alterTable('jjlyrmvwed', function(table) {
    table.boolean('phoqbkodcr');
    table.float('nrxeupesdw');
    table.text('avzakghhga');
    table.json('qretzikuqo');
    table.bigInteger('wwnihcwpqe');
    table.boolean('nwwnmjpiqb');
    table.json('sbketogeuj');
  });
  await knex.schema.alterTable('hponutsrdr', function(table) {
    table.json('yuuwscngor');
    table.text('ngiotlhlsd');
    table.float('xvnalveril');
    table.bigInteger('ylxjrxderv');
  });
  await knex.schema.alterTable('zzflqkjgqe', function(table) {
    table.json('oalqdtidyk');
    table.float('bzdwrxumbf');
    table.json('dmkmsfzlxj');
    table.string('bwzphbxevn');
    table.boolean('yonrwqxhlx');
    table.bigInteger('ataochegpr');
    table.json('myptugksyi');
    table.boolean('pmhiekneet');
    table.float('nwuqelemyj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};