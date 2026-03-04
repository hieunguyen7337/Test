'use strict';

/**
 * Migration: 20240912211440_tvpffhbiqcqrviz
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bfhwtqzduc', function(table) {
    table.text('xtxvqvcgzs');
    table.string('gobmrjdlcg');
    table.json('qrfoqgfhrx');
    table.bigInteger('ethgaxrkvr');
    table.float('fdzrffkxvx');
    table.text('zinelpqtez');
    table.timestamp('zrdnnjenwn');
  });
  await knex.schema.alterTable('klnxxcqbcl', function(table) {
    table.integer('lvfhdkegsp');
    table.text('jrjhnzjakn');
    table.string('wanqpsvibt');
    table.float('cianvzfmug');
    table.string('jvwlagokef');
  });
  await knex.schema.alterTable('cmugxjcgfe', function(table) {
    table.timestamp('gsbjigdbfg');
    table.float('neodrlslak');
    table.bigInteger('hfsdqinydm');
  });
  await knex.schema.alterTable('cjwcxzdjly', function(table) {
    table.string('sbmbjrrkdb');
    table.timestamp('vvmlhroapg');
    table.float('kpktpbqbxa');
    table.bigInteger('kgbasazdri');
  });
  await knex.schema.alterTable('vxxoyxtdbj', function(table) {
    table.text('atiwjasqjc');
    table.float('ezbinwxdpm');
    table.timestamp('uhzowivjex');
    table.timestamp('ioomvmviym');
    table.float('tilplepsdy');
    table.string('dmefuifxjj');
    table.text('qxpsdcnnwa');
    table.timestamp('olvdzntufl');
    table.bigInteger('boysykgvvl');
    table.bigInteger('pirlznybfg');
  });
  await knex.schema.alterTable('pjsmcqbans', function(table) {
    table.bigInteger('tsjillpvhv');
    table.bigInteger('hfecvhrujd');
    table.string('wftldcfcyj');
    table.timestamp('kmvlomltif');
    table.json('lloyhbmajy');
    table.float('irdkkdfnpy');
    table.timestamp('mhyazhjrai');
  });
  await knex.schema.alterTable('geyukxlmvi', function(table) {
    table.text('snluhkfjyr');
    table.string('mmzjkhhmnm');
    table.integer('ugrerwrwau');
    table.float('oakgtkojrz');
    table.float('fequhvetwm');
    table.boolean('nogibrtowh');
  });
  await knex.schema.alterTable('zvrlpfxnku', function(table) {
    table.boolean('gzctpjgsgd');
    table.float('okrjhpatkf');
    table.json('tnlgipaelc');
    table.integer('ztotglxovy');
    table.integer('agkjaenuow');
    table.integer('gkmyrylsfy');
    table.json('mcbwiaodtg');
    table.text('ywqykxrygv');
  });
  await knex.schema.alterTable('fhsczgdkil', function(table) {
    table.text('gaaihpqvmc');
    table.bigInteger('kuutoxfmsk');
    table.text('vntdbfkrgf');
    table.float('aeqctmqwra');
  });
  await knex.schema.alterTable('qqzfzjfgfe', function(table) {
    table.float('isknadrhlz');
    table.integer('xfvcgtnzfy');
    table.json('jzqublwenv');
  });
  await knex.schema.alterTable('fdwhexrzoy', function(table) {
    table.json('khlojtvqzc');
    table.timestamp('clrqegtigg');
    table.string('kkillmgign');
    table.timestamp('ydaswzjeie');
    table.boolean('jtokwqayar');
    table.integer('cajdcafogm');
  });
  await knex.schema.alterTable('hptpzlcrok', function(table) {
    table.integer('fzhcfnmxhf');
    table.boolean('tdgvbnzenb');
    table.string('zotxxabthv');
    table.boolean('fspqdehodi');
  });
  await knex.schema.alterTable('fohhitzahl', function(table) {
    table.text('yerlllhgkh');
    table.float('oclrgrqiwd');
    table.text('nmyyihacgr');
    table.json('cvmqdyqgxy');
    table.integer('nutrcvxosl');
  });
  await knex.schema.alterTable('ohzmyyyjst', function(table) {
    table.bigInteger('dbuxzxylnh');
    table.integer('esmpjfsytw');
    table.integer('nhyuicpaqf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};