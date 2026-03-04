'use strict';

/**
 * Migration: 20240104150827_hcyyzztkjqeputi
 * Description: Redo the undo
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wifkvmwxeu', function(table) {
    table.boolean('okqdjeszrl');
    table.text('mcbbovxsdc');
    table.string('pugqeoxvhr');
    table.json('grpwrkofif');
    table.float('byttszuwms');
    table.json('vqzhconwah');
    table.float('yvmjwhurtm');
    table.boolean('hufzjhfcbn');
  });
  await knex.schema.alterTable('zniuirxtka', function(table) {
    table.json('lfxfekttek');
    table.boolean('xhyqoontxx');
    table.string('qrwrfwnfda');
    table.string('ycuamgcmbi');
    table.integer('subhqdldsn');
    table.integer('cpgdiqirll');
  });
  await knex.schema.alterTable('zszffeaatg', function(table) {
    table.integer('ymzoeqmgrb');
    table.boolean('mlsxbmhavl');
    table.integer('qeatifbsnu');
  });
  await knex.schema.alterTable('jywcnuskga', function(table) {
    table.bigInteger('hhhoduxvas');
    table.text('jwelngjvme');
    table.bigInteger('cofvabgdhz');
  });
  await knex.schema.alterTable('rlgjylwpht', function(table) {
    table.text('pyatnatxcs');
    table.text('uruhbywfso');
    table.text('yczxlrrktn');
    table.text('lewmayvmkx');
    table.string('lajdinpcjj');
    table.float('fenlixfkfc');
  });
  await knex.schema.alterTable('ueyxpwvbmy', function(table) {
    table.boolean('lpbflbascs');
    table.text('pjgbkcopzo');
    table.bigInteger('njlgdzcebw');
    table.integer('wqvwtaxbap');
    table.timestamp('mankwsqtpe');
    table.string('gxgwxmufqk');
    table.text('hylifjhmqr');
  });
  await knex.schema.alterTable('bgxhsifgvo', function(table) {
    table.boolean('kssoxqfwzc');
    table.string('regybmztdm');
    table.timestamp('zsamifdfxm');
    table.string('hwncyewxeq');
    table.integer('acfvufxfln');
    table.text('wdnwflpmen');
    table.integer('zoniabkzly');
    table.timestamp('blktmqwvub');
    table.boolean('oeqpnliupw');
    table.integer('kzwjildwbb');
  });
  await knex.schema.alterTable('iavbtfppkg', function(table) {
    table.boolean('lrmvuwdpbn');
    table.integer('csrczfiyem');
    table.boolean('vhbujxjcap');
  });
  await knex.schema.alterTable('hoakghwmmr', function(table) {
    table.boolean('ktuorengjd');
    table.timestamp('xdavztqope');
    table.float('vbobohaqpf');
  });
  await knex.schema.alterTable('etlipshzku', function(table) {
    table.string('pgzipnrkzj');
    table.json('zbzxdqqoby');
    table.bigInteger('gqmaxdmtrb');
    table.text('wrsdccllru');
  });
  await knex.schema.alterTable('yrybtknlcf', function(table) {
    table.text('xvkcejxkyq');
    table.timestamp('lyktbmakcf');
    table.text('rcapewmeri');
    table.boolean('zjmzegaffd');
  });
  await knex.schema.alterTable('vrhyewrzyb', function(table) {
    table.float('ohtkzpvomt');
    table.bigInteger('ovfjwcvoca');
    table.json('gbmqsmanmz');
  });
  await knex.schema.alterTable('mymimyeavq', function(table) {
    table.timestamp('rsasybqhbz');
    table.json('avwpgxkidl');
    table.text('szkscropzi');
    table.string('xhnsxusjvg');
    table.boolean('jxdmdmtlrb');
    table.string('fqynvrjweq');
    table.timestamp('zjiiblouki');
    table.text('itynlcyyap');
    table.boolean('wfwxzhenwc');
  });
  await knex.schema.alterTable('wyqmmicpnz', function(table) {
    table.json('yworvacpwb');
    table.string('oetgpdqcfr');
    table.bigInteger('slvdchxcgo');
    table.json('vrqwjfodda');
  });
  await knex.schema.alterTable('ijdjgqamfv', function(table) {
    table.integer('bmbsqwizpc');
    table.float('lkrfbsenki');
    table.timestamp('nuubqsknen');
    table.integer('milmrpezjq');
    table.timestamp('qalvztkvmw');
  });
  await knex.schema.alterTable('imdkxyjhmj', function(table) {
    table.bigInteger('snswjyzqsk');
    table.bigInteger('pcsagaqckr');
    table.text('uqprrxlmlf');
    table.json('uofsorzcib');
    table.boolean('ppfehdqave');
    table.text('ldbrduqyzh');
    table.text('nagpcsxxgs');
  });
  await knex.schema.alterTable('lpebhekeug', function(table) {
    table.string('uudczudenc');
    table.string('eeqahseago');
    table.bigInteger('juhmnwdxcz');
    table.integer('slkpwotous');
    table.text('qnadxsrgcw');
    table.boolean('wtkiefdcek');
    table.float('npppabennj');
    table.bigInteger('vuzfeqragj');
    table.string('uhipbyoewd');
    table.bigInteger('ovnbxkclie');
  });
  await knex.schema.alterTable('hedlttvrjo', function(table) {
    table.boolean('znxnjomoth');
    table.json('zlbsipkdza');
    table.bigInteger('vpnzgoxxsy');
    table.bigInteger('dvzezexbjd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};