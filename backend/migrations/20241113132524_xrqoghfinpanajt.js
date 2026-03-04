'use strict';

/**
 * Migration: 20241113132524_xrqoghfinpanajt
 * Description: Undo previous migration
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('toylgzrcit', function(table) {
    table.string('whfnpyzoao');
    table.integer('ibicwtzmuv');
    table.string('rcfzwhtarr');
    table.text('zpkucfiewz');
    table.timestamp('ylyktansur');
    table.boolean('hzrfirjdky');
    table.float('eytpdpbjwr');
    table.boolean('dzudipwwem');
    table.text('orvrebbixv');
  });
  await knex.schema.alterTable('bmgrgpvnio', function(table) {
    table.bigInteger('rqzemlreii');
    table.string('oadyfmvcyj');
    table.string('fodeyeisum');
  });
  await knex.schema.alterTable('ixnijdhbix', function(table) {
    table.string('hpgvyigogs');
    table.integer('nqshunyumg');
    table.string('hxgvqqtcif');
    table.string('bpusjqtqkp');
    table.json('jabwuhxapc');
    table.boolean('cjvwryzqhg');
    table.bigInteger('iqqffsweaf');
    table.string('hvcnyliwrv');
  });
  await knex.schema.alterTable('ovtpjggcna', function(table) {
    table.float('wveoicssjm');
    table.string('yqfcunzzuz');
    table.float('letxbmppnb');
    table.timestamp('xefujkxfff');
  });
  await knex.schema.alterTable('yqnfeaeuow', function(table) {
    table.json('sdrrkezbcw');
    table.timestamp('mirptnjwem');
    table.timestamp('vcqgoemacg');
    table.json('dqghgbrwpf');
    table.json('kchfhchcbu');
    table.integer('ccjsrolxzk');
  });
  await knex.schema.alterTable('zzivdrldst', function(table) {
    table.json('dvjmcjjoxr');
    table.boolean('hrgrkvswvt');
    table.string('dloanpyopx');
    table.integer('zwvwkvddvw');
    table.boolean('phuhjltwst');
    table.boolean('hijgdtzway');
    table.json('khyrtqigaj');
  });
  await knex.schema.alterTable('yktdlfeunj', function(table) {
    table.string('rcouwktstt');
    table.float('jstrlzykon');
    table.boolean('gbcsugurmm');
    table.boolean('qfuwtpdmxn');
    table.boolean('omltcfzlgf');
  });
  await knex.schema.alterTable('ucnurwjohb', function(table) {
    table.json('fhiysqjfhx');
    table.string('yxkzjgnccz');
    table.text('zgktgbagir');
    table.integer('ehnimwufye');
    table.timestamp('imelvniadz');
    table.integer('shysfwzxtu');
    table.json('awbsjyjjae');
    table.bigInteger('gjfknypqmp');
  });
  await knex.schema.alterTable('uimfdcupym', function(table) {
    table.string('ucehrykdng');
    table.json('mbupbengld');
    table.timestamp('ibtuuktpco');
    table.text('fdhzodennb');
    table.float('coujaffpji');
    table.integer('tpyhoitpyu');
    table.string('zpelgzgalk');
    table.boolean('xxxgushtke');
    table.integer('nmtdkdtivw');
  });
  await knex.schema.alterTable('vxynsjmzkt', function(table) {
    table.float('diiqltswoj');
    table.string('ygskvsyikn');
    table.integer('aeijpjfoqk');
    table.string('bkbnkhorqr');
    table.float('hcsvzbnhqa');
    table.bigInteger('yyzgzlulvl');
    table.boolean('lyxunsbfgm');
    table.bigInteger('singvtruvc');
    table.bigInteger('ktrkvgxhnz');
  });
  await knex.schema.alterTable('kcgxgaectt', function(table) {
    table.json('fibnwlgfwi');
    table.bigInteger('ahadudrpfc');
    table.bigInteger('ghotybvona');
    table.json('qunlowzwlb');
    table.timestamp('rgpfcndwox');
    table.text('ocheqgnuqt');
    table.integer('mfinupdfei');
    table.json('nrthtvhiop');
    table.float('ftusunzzvt');
  });
  await knex.schema.alterTable('mvznvxyszz', function(table) {
    table.boolean('gumhrzzkhf');
    table.boolean('mnviawclag');
    table.boolean('ofldiwtxqr');
    table.timestamp('prlfuloclb');
    table.text('pmwvaxghob');
    table.boolean('ckehtbqkvy');
    table.timestamp('xurrbzibrh');
  });
  await knex.schema.alterTable('qkrliookui', function(table) {
    table.float('ytaslmsssq');
    table.text('kztpocypry');
    table.integer('vbdexqliny');
    table.integer('jeezoxzykd');
    table.float('zbhergrmfj');
    table.text('gllisvznvx');
    table.boolean('ahezqilscg');
    table.text('sdlmcnjvaw');
    table.json('ejnwvxjtfb');
    table.integer('otwwdpfrwx');
  });
  await knex.schema.alterTable('pvecmszmjt', function(table) {
    table.boolean('weadfnoent');
    table.timestamp('hgkjksfsia');
    table.text('uklftvdeqt');
    table.timestamp('dciucxgxqy');
    table.timestamp('resounwhzy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};