'use strict';

/**
 * Migration: 20240911190634_mtgnmhkzcuiaujd
 * Description: Please work this time
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cnlpztryzj', function(table) {
    table.timestamp('gzdpumqxys');
    table.bigInteger('pzrduvxuvt');
    table.integer('qmuqopzzqu');
  });
  await knex.schema.alterTable('rbojpxibfb', function(table) {
    table.bigInteger('pgkazyelti');
    table.bigInteger('uqwnaptbsv');
    table.text('gokjhpzqpo');
    table.timestamp('idstnzvzdr');
    table.json('wtsmfmaejt');
    table.text('zbpcobjkrf');
    table.integer('urrhpqtyqh');
    table.boolean('ztucjwdimq');
    table.bigInteger('lntunbrhgt');
  });
  await knex.schema.alterTable('yjqboylqip', function(table) {
    table.bigInteger('jrdtabjbub');
    table.string('dvkdpghrrq');
    table.boolean('uxmtyumuxw');
    table.integer('rzjcmvjvjc');
    table.bigInteger('vibxkorgbv');
  });
  await knex.schema.alterTable('aozkejnecv', function(table) {
    table.integer('btmgxxfrkf');
    table.float('gxikdteung');
    table.float('jsjhhvnfmt');
    table.integer('hqucgqjzhe');
    table.boolean('oqhvofwmpf');
    table.string('vdojhcxohw');
    table.string('pjacufmlnd');
    table.boolean('luuwwasgss');
    table.integer('uyuwgysuny');
  });
  await knex.schema.alterTable('yktzrbblet', function(table) {
    table.float('ptflwrlemi');
    table.string('uajvubnogj');
    table.boolean('qetabbtzhd');
    table.text('spprnevjhc');
    table.bigInteger('miwnhjzvxd');
  });
  await knex.schema.alterTable('tmmaxduxbr', function(table) {
    table.boolean('tpjhxcwiil');
    table.integer('nreymvjhxg');
    table.boolean('ibvhdmtoui');
  });
  await knex.schema.alterTable('laggwkincy', function(table) {
    table.bigInteger('qnxgcyjqkj');
    table.string('wiugzdbpkz');
    table.text('yalljzpuyk');
    table.text('oorytexyoo');
    table.bigInteger('axreyefqtx');
    table.string('dhoptibkwd');
    table.string('gqhzycefdf');
    table.json('xkontcgngz');
  });
  await knex.schema.alterTable('kalgzorbme', function(table) {
    table.integer('hbzltdqigf');
    table.string('azbgabllpn');
    table.bigInteger('brqsmbopni');
    table.float('mridvwexqe');
    table.float('zshkgaqxke');
    table.bigInteger('tevmkwsdke');
    table.integer('jxwqagsmeu');
    table.boolean('kdflpnhfnf');
  });
  await knex.schema.alterTable('cgclbysrnj', function(table) {
    table.text('ddhvjnqwmo');
    table.bigInteger('mxndohybqk');
    table.text('psrvhdjfxl');
    table.json('eivuuabtqo');
    table.timestamp('vxbkuptyze');
    table.float('jqwlvxhxlp');
    table.boolean('oiaryqwrof');
    table.string('wimmddmkmk');
    table.timestamp('smlqvrnniq');
  });
  await knex.schema.alterTable('bkkczzqplq', function(table) {
    table.json('muknucbteo');
    table.bigInteger('oskawljrtm');
    table.timestamp('jizyicivvq');
    table.bigInteger('sgrznmpqts');
    table.integer('wyywivtmgd');
  });
  await knex.schema.alterTable('fznfhtpdrp', function(table) {
    table.string('ckzwaxjinf');
    table.text('llmddhxhao');
    table.integer('ssqqppxvas');
    table.float('nhzbhkidsu');
    table.text('bqnunsmhpw');
  });
  await knex.schema.alterTable('ewjwhescwu', function(table) {
    table.float('pntfwwyong');
    table.boolean('lzwpvdtacr');
    table.json('cilvonkirb');
    table.boolean('tegmiqnysf');
  });
  await knex.schema.alterTable('wlabaaqmhn', function(table) {
    table.json('cixflvtdhp');
    table.text('amevrvrrpx');
    table.float('lwdgulwbzg');
    table.boolean('nkxaoaeprl');
    table.string('xmczqmiarz');
    table.bigInteger('pewvlaqvnl');
    table.string('svxmgxyirf');
    table.integer('oyvslstoii');
  });
  await knex.schema.alterTable('zuezacuphp', function(table) {
    table.timestamp('pehguqfzfy');
    table.integer('mlyunerrey');
    table.json('fjennmrzok');
    table.string('rpmvnrjwaf');
    table.json('zzitssdlou');
    table.string('xioubcvpgg');
  });
  await knex.schema.alterTable('vkuearyorq', function(table) {
    table.float('sqyyhvhmrj');
    table.json('zjgiuurkpg');
    table.integer('qtrrugjplb');
    table.timestamp('iawxpffhgj');
    table.integer('aohrmukhwr');
    table.string('zzwriaizbn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};