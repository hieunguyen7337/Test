'use strict';

/**
 * Migration: 20240325040841_bjzefowufdtvfzy
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('digpelthqm', function(table) {
    table.bigInteger('kxvwzcwfzs');
    table.integer('mmfyojvyjm');
    table.float('sdfyrgutnw');
    table.bigInteger('eykxsxmkrt');
  });
  await knex.schema.alterTable('zivyllljej', function(table) {
    table.json('ayzohvlqkj');
    table.text('zprzhybkec');
    table.timestamp('gzzmlmfcou');
    table.float('vxqmujvrny');
    table.text('qxhqqgieqf');
  });
  await knex.schema.alterTable('axflkvnflp', function(table) {
    table.json('zrzrerrmxw');
    table.string('jlwsialvpt');
    table.json('xxoqyhnlyc');
    table.boolean('ruihriovvi');
    table.float('omcppvimey');
    table.integer('mjdshbjcuz');
    table.bigInteger('smbendtaol');
    table.json('ueumsefepx');
    table.text('tqxrvzhpmy');
    table.float('ytqiijnivj');
  });
  await knex.schema.alterTable('ljtvxzfdiw', function(table) {
    table.json('warsgaxroy');
    table.bigInteger('xanykrvulm');
    table.float('zzkiywhmdc');
    table.text('yyzbpiacvl');
    table.timestamp('eszbpepzrq');
    table.string('adxghczkyo');
    table.float('mphirzmpkg');
    table.timestamp('ddsthqjmeu');
    table.string('vpvhvdezdq');
    table.string('dycunpgtdx');
  });
  await knex.schema.alterTable('saeoxtsmet', function(table) {
    table.boolean('kbbppyijaf');
    table.text('lucyjluazy');
    table.text('vxvnjronlu');
    table.json('wlpujlxazy');
    table.string('rehfneltmt');
    table.integer('wpinmwekix');
    table.boolean('brwkuqpqkl');
  });
  await knex.schema.alterTable('wxvnbhkuqe', function(table) {
    table.bigInteger('ejefvpneay');
    table.timestamp('nxjnhambyu');
    table.float('jisamybgdk');
    table.timestamp('bdpmxnribs');
    table.float('rclsmevfeq');
  });
  await knex.schema.alterTable('evqqasyykc', function(table) {
    table.json('oicstprgwi');
    table.json('nivstttcob');
    table.boolean('ibqxmeoerb');
    table.json('eogcfmglii');
    table.json('fctqwjxruo');
    table.json('yztxatxhab');
    table.float('gncvhzbqfz');
    table.float('qleforpsvw');
  });
  await knex.schema.alterTable('vccdvlkwbl', function(table) {
    table.boolean('asqpteodas');
    table.float('zoyptixgob');
    table.timestamp('ngaxkqgmdv');
    table.text('bjbuglfjmu');
    table.bigInteger('mtudalfeyj');
  });
  await knex.schema.alterTable('kirioyrvme', function(table) {
    table.boolean('nwzfmsppfw');
    table.timestamp('kwmjiyiwuv');
    table.float('pescgcbsgf');
    table.text('wetsupzhpa');
  });
  await knex.schema.alterTable('hccdgosgzz', function(table) {
    table.string('hogalvbngw');
    table.json('zavnhmbhoi');
    table.text('sahnotiwbr');
    table.float('lathkbybpn');
    table.string('gtfeglkfol');
    table.float('foahokteva');
    table.bigInteger('ufzktdpzgn');
  });
  await knex.schema.alterTable('xiurqzbmap', function(table) {
    table.string('spdkilmeoj');
    table.integer('eeqdfytcnj');
    table.text('tscrotsxam');
  });
  await knex.schema.alterTable('quylqdsgwo', function(table) {
    table.timestamp('zdqechcxol');
    table.text('yeuzmuatlw');
    table.boolean('opgyjzoxkg');
  });
  await knex.schema.alterTable('gzczvdduey', function(table) {
    table.string('zpddjmucfj');
    table.boolean('hxmwzhnqzt');
    table.string('buataxjszw');
    table.bigInteger('allqdazvqy');
    table.bigInteger('igumrsrjnw');
    table.float('ioekmuzall');
    table.json('fxfuvivmoo');
    table.timestamp('hqqebofoij');
    table.integer('jvggpqpqjm');
    table.bigInteger('xoyoriedea');
  });
  await knex.schema.alterTable('sxvpvrqgao', function(table) {
    table.timestamp('bruqjliakv');
    table.string('wsokruzypo');
    table.text('kynxrqhyjh');
    table.integer('uvfmygggou');
  });
  await knex.schema.alterTable('dyfqsnnvuh', function(table) {
    table.float('cljyugrpaw');
    table.timestamp('przrdncjum');
    table.timestamp('kdgeglwlpw');
    table.text('xgaklezari');
  });
  await knex.schema.alterTable('joypervxjq', function(table) {
    table.float('oyxjxjjrwf');
    table.bigInteger('eiltwkxcrk');
    table.boolean('tgakluhtzs');
    table.timestamp('bznqrxhzon');
  });
  await knex.schema.alterTable('ponemltsmp', function(table) {
    table.boolean('rvhyljzmcf');
    table.bigInteger('sivsottwtc');
    table.text('poiktzrelo');
    table.integer('jvzpuwnhif');
    table.text('vwadngvcfx');
    table.text('nzftmindqd');
    table.bigInteger('dtbeqmpgxq');
  });
  await knex.schema.alterTable('etxpxawuzo', function(table) {
    table.string('ppsgxkbdjn');
    table.float('exfowehvtc');
    table.boolean('cxjgijoxzz');
  });
  await knex.schema.alterTable('zvvsqcqkdp', function(table) {
    table.integer('urlidkgsuj');
    table.boolean('lptcoeddtq');
    table.string('rnztksamzu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};