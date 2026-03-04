'use strict';

/**
 * Migration: 20241118150829_oygzfahqcbyajxj
 * Description: Please work this time
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hakherudrb', function(table) {
    table.bigInteger('vvwedqfhyl');
    table.string('pknvasfiof');
    table.timestamp('bnabojcszs');
    table.bigInteger('xqwmtpkhmd');
    table.json('iqbxydgdrn');
    table.integer('ffpguqxgmi');
    table.string('jukcakamup');
    table.boolean('syyzxmvacm');
  });
  await knex.schema.alterTable('pvzemfgzcy', function(table) {
    table.boolean('gkmhcognmq');
    table.timestamp('clbnupoocb');
    table.float('ealarilmnj');
    table.timestamp('tkzaulnjte');
    table.float('kzultkgxzu');
    table.integer('xbcryzlwak');
    table.integer('mghrxqxiuh');
    table.timestamp('umcjuzfqlu');
  });
  await knex.schema.alterTable('fslbpuozuu', function(table) {
    table.json('zyvflodwqa');
    table.boolean('tgahbeygvo');
    table.text('htkucfgowy');
    table.text('nsgmpqvbxd');
    table.float('namikybvwg');
    table.boolean('puyplsjhds');
    table.integer('uqhmxdqouq');
    table.boolean('zlzthfgqzh');
    table.json('pvpqevjjwn');
    table.text('hxeuesvrqr');
  });
  await knex.schema.alterTable('lybrsttrkx', function(table) {
    table.integer('tyybpiruwx');
    table.json('rlefhfhfkg');
    table.text('svngetyoeh');
    table.timestamp('kgjbwynsuy');
    table.integer('fulajtypdn');
    table.boolean('blojbjyfys');
    table.integer('ylgtyvbafc');
    table.json('yaqsscvjuf');
    table.json('youpgavzxf');
  });
  await knex.schema.alterTable('fqhhqxebho', function(table) {
    table.integer('aznhscqchr');
    table.text('jvayqbjshz');
    table.json('rssuwttpro');
    table.json('gangilbupa');
  });
  await knex.schema.alterTable('asfaqisjoe', function(table) {
    table.text('ongfawfoxt');
    table.timestamp('jsnccdshxb');
    table.json('xrxuijrrej');
    table.string('ffjjsexipg');
    table.json('jimjcyduxr');
    table.integer('lcsyccruch');
    table.bigInteger('faqwahpaen');
    table.json('cjqcjurgjd');
  });
  await knex.schema.alterTable('udyqjebdlb', function(table) {
    table.integer('lqsrorxdet');
    table.float('xekohesxba');
    table.bigInteger('cbrmmbfxga');
    table.timestamp('rbgzonbjkx');
  });
  await knex.schema.alterTable('pikxheqrvu', function(table) {
    table.json('jfmgivxncq');
    table.bigInteger('axxlzdyqvv');
    table.integer('gyjfelcnrz');
  });
  await knex.schema.alterTable('vxlzupxfxt', function(table) {
    table.float('nnbpgaticz');
    table.timestamp('ersphhvdyw');
    table.bigInteger('alzcdzafxw');
    table.timestamp('ewhwlkvicl');
  });
  await knex.schema.alterTable('gmvenlwrgy', function(table) {
    table.integer('fohmafpnug');
    table.string('prqohtrjdr');
    table.float('xpfhywludu');
    table.float('rkqyigwkms');
    table.timestamp('zimtanpjax');
    table.bigInteger('rwseqnkfbj');
    table.text('pvbqltgfkc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};