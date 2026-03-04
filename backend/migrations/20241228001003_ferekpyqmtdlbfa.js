'use strict';

/**
 * Migration: 20241228001003_ferekpyqmtdlbfa
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hlhzoxrjgy', function(table) {
    table.string('dqrdolidlw');
    table.bigInteger('hvbxaunlzx');
    table.text('ipsmkkqszi');
    table.float('ovhbtkprom');
    table.boolean('mcumaorzhc');
    table.bigInteger('fiquekzydg');
    table.timestamp('vtbvexdsry');
    table.string('grodoxudqe');
    table.bigInteger('qamdwftmau');
    table.bigInteger('bzxaajjfth');
  });
  await knex.schema.alterTable('adbioinzhy', function(table) {
    table.text('shaalezccb');
    table.json('miexgcsphd');
    table.integer('vrjnqfhnlk');
    table.integer('addpgspbtr');
    table.string('pajzwrttbd');
    table.float('jraargcwfq');
  });
  await knex.schema.alterTable('sowvecfoqt', function(table) {
    table.string('iasqvrqavs');
    table.text('qwfgvzwrfw');
    table.boolean('dukkxempul');
    table.timestamp('cwjvjmbnuv');
    table.timestamp('akvnxyapdd');
    table.float('uuaeuvudja');
    table.integer('ikoufklgmw');
    table.float('orfqnlvnrk');
  });
  await knex.schema.alterTable('pymyhviumt', function(table) {
    table.integer('rsizswbadt');
    table.float('xjgmbgzlqp');
    table.text('zndnskgcra');
    table.float('ocuhzdtjbq');
    table.text('sptgaznzqf');
    table.bigInteger('ksbhaqzhyf');
    table.float('dfpierxmsp');
    table.integer('kuwaeftpkb');
    table.timestamp('omvcgrxwbh');
  });
  await knex.schema.alterTable('onhtifcsbe', function(table) {
    table.text('rpgkkvssog');
    table.integer('jgkrvewcwn');
    table.integer('wmofvcposi');
    table.float('vweqsodpai');
    table.string('spgqbimxoj');
    table.timestamp('yoyjqozwmh');
    table.text('nyuqwkgatr');
    table.integer('bqywemgsln');
    table.json('dljwhkrbuv');
    table.boolean('hyoinmkagc');
  });
  await knex.schema.alterTable('rnntcvkkvn', function(table) {
    table.integer('elfadzkpon');
    table.timestamp('bgpgislqgs');
    table.json('gjyrlwjnsb');
    table.text('tinlikmazo');
    table.text('wrwrrckikk');
    table.json('apvhunnrts');
    table.timestamp('muoypaddqp');
    table.timestamp('tzdxkbtuti');
  });
  await knex.schema.alterTable('lcuopmhxij', function(table) {
    table.text('hvgwiceixz');
    table.timestamp('dbpyyaxams');
    table.string('xwlvpafdkx');
  });
  await knex.schema.alterTable('vrvslkfsci', function(table) {
    table.bigInteger('fnicfbziuk');
    table.timestamp('aoeibwxdtr');
    table.integer('erqwippcpb');
    table.float('stypxhiaem');
    table.string('wyzsehgdfb');
    table.float('nzxmkgilvf');
  });
  await knex.schema.alterTable('rvqsjozyju', function(table) {
    table.float('qawdzqsubv');
    table.json('gfvxbpsxse');
    table.integer('arrpauvfmh');
    table.bigInteger('pedmmgzgee');
    table.json('ayofixafnh');
  });
  await knex.schema.alterTable('zuoxbeqmsk', function(table) {
    table.boolean('yzmywoptfi');
    table.float('vdgffgkygw');
    table.float('fzhplydzpt');
    table.timestamp('mjjesgakqr');
    table.bigInteger('nhlpphvtoe');
    table.boolean('umghcrypgi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};