'use strict';

/**
 * Migration: 20240709225341_fmkzaghmjrsbfwg
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bdbuiicczd', function(table) {
    table.boolean('nzmkhzosrz');
    table.json('andnxrmrie');
    table.string('iqlfiirueg');
  });
  await knex.schema.alterTable('mxmkbcylfg', function(table) {
    table.bigInteger('luhjpaijgz');
    table.bigInteger('airsyavhnf');
    table.string('yhsluafdhz');
    table.integer('owbmgtvllg');
    table.timestamp('jqszdjmbru');
    table.string('uwtzopdnan');
  });
  await knex.schema.alterTable('wqkkabvhit', function(table) {
    table.json('utltdxyafo');
    table.timestamp('mzacmgdjxu');
    table.timestamp('fvvyinagkx');
    table.string('cjgafneept');
    table.integer('rzekbfwqag');
    table.float('oenrktrucy');
    table.integer('hfodopssnh');
    table.text('uxftdrrjmx');
  });
  await knex.schema.alterTable('nlkuudbirj', function(table) {
    table.timestamp('rbfbgtlqpz');
    table.bigInteger('tdacyklvem');
    table.text('sceavfjnfo');
    table.json('keemeoypxj');
    table.boolean('czixxwnbgp');
  });
  await knex.schema.alterTable('ksvydknmay', function(table) {
    table.timestamp('dgogeltlls');
    table.integer('vsslivmvyk');
    table.string('jalcaztgfx');
    table.json('bymracklxr');
    table.timestamp('oojyitdadd');
    table.bigInteger('ddtjqdwamd');
    table.boolean('cbsdxstyfj');
  });
  await knex.schema.alterTable('zrqdnuzork', function(table) {
    table.string('jpjwyptuvk');
    table.string('cjmsywycke');
    table.json('vzqlzffhxm');
    table.bigInteger('codaxwlzst');
    table.json('tbkuarcuva');
  });
  await knex.schema.alterTable('ahrtsryscy', function(table) {
    table.json('ulqtnitnvn');
    table.boolean('pwpndxvjit');
    table.timestamp('ujasxohdlt');
    table.integer('figbcnktxr');
    table.boolean('qmcplofiis');
    table.string('dpckckqyye');
    table.text('kvhhcyjcva');
  });
  await knex.schema.alterTable('xhbvetfsdu', function(table) {
    table.boolean('jgfgmszrfo');
    table.float('hdsrcitwwr');
    table.text('fhcvmzfskm');
    table.boolean('nwkyulthwe');
    table.float('ipjotsmblk');
    table.float('fafathsvht');
  });
  await knex.schema.alterTable('xhofhnsgko', function(table) {
    table.integer('nkgofpusep');
    table.float('mnrobicdvj');
    table.integer('mgbpibaonr');
    table.json('vkujkaemmd');
    table.json('yiqskqzysp');
    table.text('tnnkbsxnjh');
    table.integer('hoxryxomhj');
    table.boolean('bhezgvtgcx');
  });
  await knex.schema.alterTable('gdwfcvbiyc', function(table) {
    table.bigInteger('ggrvsjpjdn');
    table.bigInteger('ufzrhdfetx');
    table.timestamp('oavvubznmq');
    table.bigInteger('bgmsmqhirf');
    table.json('iqaygfumed');
    table.float('tfyccwmxoq');
    table.string('nywzxbefkl');
    table.bigInteger('ssnbwyzfnu');
    table.integer('vksmfsfozu');
    table.bigInteger('esaggdwjrs');
  });
  await knex.schema.alterTable('iqopifuupz', function(table) {
    table.text('svmftpzrix');
    table.boolean('ujmikwnykt');
    table.integer('iyskduhbeb');
    table.bigInteger('yfhegsjwda');
    table.integer('ipewceubrt');
    table.json('djxnjctigi');
  });
  await knex.schema.alterTable('doyouoczkz', function(table) {
    table.bigInteger('pleqqfzqak');
    table.timestamp('qteguvubvn');
    table.json('grqpcrkvxp');
    table.string('ofhzqqoisn');
    table.json('gwtrxqgmqx');
    table.float('phntfszwxm');
    table.bigInteger('umglnmykwp');
  });
  await knex.schema.alterTable('ekorquvfyu', function(table) {
    table.bigInteger('xelwgkureh');
    table.float('abofhjqiwy');
    table.bigInteger('rfgytwgwja');
    table.boolean('rmtaorweie');
    table.text('xnwbeokaib');
    table.float('lezknuneam');
    table.float('sdujpcrkco');
    table.timestamp('ocuhcxjcaq');
    table.integer('osbicldsls');
    table.timestamp('daytjxqwyx');
  });
  await knex.schema.alterTable('hyfzmkroat', function(table) {
    table.timestamp('urxwgwmfog');
    table.bigInteger('xmwbuamyaw');
    table.json('zhvxyjgzfp');
    table.boolean('hndpiofzog');
    table.timestamp('zwggucgigs');
    table.boolean('idjxojaols');
    table.timestamp('uulfqgoflh');
    table.bigInteger('nftkrxdxyi');
  });
  await knex.schema.alterTable('xsfppdjklp', function(table) {
    table.text('vdfjztprgv');
    table.float('swmlpcbjxs');
    table.string('kbwporeirv');
    table.float('jairulbfao');
    table.string('wnsprnfchz');
    table.boolean('zcrfopiecv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};