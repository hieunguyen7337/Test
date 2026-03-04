'use strict';

/**
 * Migration: 20240601215927_rguzdvinbjlzgvv
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xwujuiwteg', function(table) {
    table.timestamp('aerqxvgamp');
    table.json('pdaqoiotbj');
    table.float('hxpqhtnsas');
    table.timestamp('dibuoqbvpn');
    table.string('twzsitulkk');
    table.text('nepuhssgfd');
    table.integer('ouabwdyada');
    table.text('bbwfwspisl');
    table.integer('dgqyucibyb');
  });
  await knex.schema.alterTable('anpijoggor', function(table) {
    table.string('ctufgoderp');
    table.float('kzcclapmpa');
    table.string('ukgivqzkng');
    table.boolean('pxfvffxebm');
    table.text('uumjvpvpdp');
    table.float('vwilehhbsx');
    table.json('malcxbysof');
    table.boolean('kuyhyuznlf');
    table.bigInteger('mmtimxlvrh');
  });
  await knex.schema.alterTable('fcmvibrjkc', function(table) {
    table.json('hyevvcauoc');
    table.bigInteger('wizmxdxpwm');
    table.json('xjkdfphwkz');
  });
  await knex.schema.alterTable('ehldejxurn', function(table) {
    table.boolean('inesyyuvbz');
    table.float('cmugcjspxb');
    table.float('pwgkastolh');
    table.bigInteger('rojxffyext');
    table.json('svmeqchilu');
    table.json('yjzedvsjbi');
    table.float('ayebfxqhow');
    table.bigInteger('czlhyalawv');
    table.boolean('qrxarrjepr');
  });
  await knex.schema.alterTable('vzvrxhawfi', function(table) {
    table.integer('aoypfnjgvz');
    table.boolean('ijacxwxweu');
    table.boolean('cbkqqcannn');
    table.string('atanbmpnkd');
    table.string('kekioxgrjp');
  });
  await knex.schema.alterTable('jtgccgunfb', function(table) {
    table.json('uwnsbcjyci');
    table.timestamp('vaiphjqkbq');
    table.float('wgoguuyznp');
    table.bigInteger('xpkcywmouv');
    table.integer('zbkykiqvpz');
    table.bigInteger('oxvtpcaztp');
  });
  await knex.schema.alterTable('cbootoqqwf', function(table) {
    table.timestamp('exixhsekxh');
    table.string('xdzyoqwljf');
    table.integer('itgwsfybdi');
    table.float('nqkduyerdb');
    table.timestamp('wkpvodwhvf');
    table.bigInteger('zeerfhbhkm');
  });
  await knex.schema.alterTable('fhkeewgxbj', function(table) {
    table.string('ikcwkawnsw');
    table.float('tgrgkyccmo');
    table.timestamp('baadkwzlvt');
    table.boolean('vbnakyfciy');
  });
  await knex.schema.alterTable('gtchdfvuvl', function(table) {
    table.timestamp('bnevftnsmn');
    table.string('axhndkhmxy');
    table.json('dezaxedjky');
    table.integer('fpajxjebdl');
    table.string('qttkdxpmxr');
    table.integer('iixakikmze');
    table.text('mhcsziszaf');
    table.text('pigyptlzhs');
    table.json('zyqjcmhysy');
  });
  await knex.schema.alterTable('vmehgripkz', function(table) {
    table.boolean('mgnxihhfxk');
    table.float('preiosqcxl');
    table.boolean('imbtpzejrd');
    table.float('yyhnfvnmrw');
    table.float('oqgwjabmuf');
    table.integer('jcewvejfwm');
    table.bigInteger('spwoirzdra');
  });
  await knex.schema.alterTable('mvjgtctjbn', function(table) {
    table.json('gsgzcogtfp');
    table.timestamp('vwtecyaclp');
    table.string('sqhhytuxad');
  });
  await knex.schema.alterTable('rjzinkphkk', function(table) {
    table.timestamp('gbqalbroax');
    table.timestamp('micvjhgqyr');
    table.json('iefnhcnccy');
    table.text('doosltwgot');
    table.boolean('lwdlvmtiyh');
    table.json('ibdwfxhpyn');
    table.integer('kjpmgutyiz');
  });
  await knex.schema.alterTable('ydfmssenie', function(table) {
    table.float('hcyfvdhkdu');
    table.bigInteger('okfjxpthza');
    table.bigInteger('vdvsvdogab');
    table.text('iasgsrhvkn');
  });
  await knex.schema.alterTable('vibwlcsuks', function(table) {
    table.float('fmoifcmyzr');
    table.json('lgxncqzths');
    table.bigInteger('bwgrsmnwoz');
    table.json('bsappssfqq');
    table.integer('kvxyltjklu');
    table.integer('xjkcelmiwe');
    table.timestamp('otsuckjlcs');
    table.string('skmlzzgtkq');
  });
  await knex.schema.alterTable('wwaanrxyxc', function(table) {
    table.integer('fkxmqpimbi');
    table.string('mxemnwgvox');
    table.json('hitvrvrsrg');
    table.float('myguznhbou');
    table.boolean('fvoasvqmga');
    table.integer('kzxfdptbvt');
    table.boolean('tuvrdsokvq');
    table.timestamp('jhvpxdnana');
    table.boolean('wakgbavfvp');
    table.integer('yliutjpkhl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};