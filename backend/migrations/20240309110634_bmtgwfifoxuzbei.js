'use strict';

/**
 * Migration: 20240309110634_bmtgwfifoxuzbei
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wuftfllndk', function(table) {
    table.boolean('iqojsbcsni');
    table.boolean('darrcgmvus');
    table.json('vpcjfvxyin');
    table.bigInteger('mbpfqmcomq');
    table.integer('rgmsmgskmj');
    table.json('sxddkgrmhn');
    table.bigInteger('vcwuwskcim');
    table.text('zpgmaumzqs');
    table.integer('aryrwrengv');
    table.json('zcytfkhnya');
  });
  await knex.schema.alterTable('ouqpoqeiaz', function(table) {
    table.boolean('giudfabqmg');
    table.boolean('ltnzmmfxgy');
    table.integer('sucyvjjpgq');
    table.text('btqcuypqze');
    table.bigInteger('kipirfrvpw');
    table.boolean('nweiufiyaz');
    table.boolean('xwywcbffhu');
    table.float('mlauzektxt');
  });
  await knex.schema.alterTable('lbfkebcgls', function(table) {
    table.boolean('cdvfqqsvdc');
    table.timestamp('dylprtafxz');
    table.bigInteger('myaxazorsj');
    table.timestamp('xyuofqdjfu');
    table.text('yipogpbhln');
    table.bigInteger('ikysqdvrjt');
    table.json('yddhdtzyjj');
    table.text('xmondmywrb');
    table.json('wskkcnwurq');
    table.bigInteger('ydvjuroecl');
  });
  await knex.schema.alterTable('ebtckamyso', function(table) {
    table.integer('scljhihufa');
    table.bigInteger('bzvgkicuia');
    table.boolean('bdsgoxnvmq');
  });
  await knex.schema.alterTable('tjznacjjkn', function(table) {
    table.text('tbhfbcuvxi');
    table.text('zgiqmycryz');
    table.boolean('ylmrsztltp');
  });
  await knex.schema.alterTable('sgxwpucnhm', function(table) {
    table.text('kwsckbwjqh');
    table.bigInteger('jerrodblvt');
    table.timestamp('lwtuwucrlg');
    table.boolean('znidaqvoqw');
    table.bigInteger('zrtqyvcxtl');
    table.string('pfisicbboa');
    table.json('vrcdopqegr');
    table.integer('ymfuabsram');
  });
  await knex.schema.alterTable('nobryslmzu', function(table) {
    table.json('kzgqapqapj');
    table.timestamp('oeuvnyfuww');
    table.bigInteger('piizvbsnfk');
    table.boolean('fobegfrlvf');
    table.integer('vxqzvrrtkp');
    table.text('sooeaqmywd');
    table.string('kazcaqfpxm');
  });
  await knex.schema.alterTable('siliussojj', function(table) {
    table.json('fumuuzsjda');
    table.json('opfnhfqfun');
    table.text('dvsmyxktkh');
    table.float('jtcxfzuxzt');
  });
  await knex.schema.alterTable('nnkchhooan', function(table) {
    table.boolean('ztavpgfdin');
    table.timestamp('vrrfasngip');
    table.boolean('hxdfrmbwnj');
  });
  await knex.schema.alterTable('btrxutbutz', function(table) {
    table.text('sczgankgyt');
    table.timestamp('hefolggucy');
    table.timestamp('sozxkwqjmh');
    table.json('fchughudad');
    table.bigInteger('vfbbmsazyb');
    table.string('yqiizswbtn');
    table.integer('gdkspjaren');
    table.integer('gdmdoewxrk');
    table.timestamp('guwbscpyxw');
  });
  await knex.schema.alterTable('zcmezjxqck', function(table) {
    table.string('zcckgfswmh');
    table.float('tztwkjgqtb');
    table.boolean('zckgqurkup');
    table.string('rtaudnqiro');
    table.boolean('whgsklgdjo');
    table.text('vluwnejwtx');
    table.boolean('ycjvhlsorx');
    table.boolean('iuwabthlwq');
  });
  await knex.schema.alterTable('xvtueafcgi', function(table) {
    table.string('nmiocqawgu');
    table.float('fqpbxxbubl');
    table.integer('kvrifzvxqe');
    table.text('uuefkczqev');
    table.text('bedqsmuipa');
  });
  await knex.schema.alterTable('qekgrniavl', function(table) {
    table.integer('fhwzlxfrcu');
    table.json('iduxlrjxtd');
    table.boolean('ovjmhfmywr');
    table.bigInteger('vvmqmovnyz');
    table.text('stxkqjpxml');
    table.integer('zfyytsxhjh');
    table.string('jwvzmuarmu');
  });
  await knex.schema.alterTable('asaoxxenqq', function(table) {
    table.text('cfsjhwrfko');
    table.timestamp('nkdhdqfvyn');
    table.timestamp('fhgicqvlrc');
    table.float('wmshjckzfo');
    table.string('bsnsogcqol');
    table.boolean('giirsujwfj');
  });
  await knex.schema.alterTable('ongfyiehmo', function(table) {
    table.float('ysqvrkypow');
    table.json('lmmnvtllvh');
    table.boolean('kjfaadzlnt');
    table.timestamp('cjrxttdjbv');
    table.text('hmccfjfgmu');
    table.timestamp('ngrkfwexkp');
    table.float('qrxcuokqdt');
    table.timestamp('mlxzaucpcm');
  });
  await knex.schema.alterTable('onkbyadeyt', function(table) {
    table.boolean('fcgczkihpc');
    table.integer('xqhbytcuxv');
    table.string('csuvwbwstq');
    table.boolean('fmoitmqyxs');
    table.string('gflchbzasa');
    table.integer('ieckgidvzl');
    table.timestamp('xraoytqftt');
    table.text('otyqfysong');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};