'use strict';

/**
 * Migration: 20240605081213_awlzxworzfzlllj
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xtsnhkqgtf', function(table) {
    table.integer('pooungqrnv');
    table.timestamp('xyzwbxpvki');
    table.json('yofazzxdva');
    table.float('cidonqpgqi');
    table.json('coqwdioupl');
    table.boolean('chbwjevvpj');
    table.json('bpyrllefvs');
    table.timestamp('waynfyhitj');
    table.boolean('ifagmfqsxd');
  });
  await knex.schema.alterTable('wbeawcckdo', function(table) {
    table.boolean('gxgxsfitay');
    table.integer('didjypqdyw');
    table.integer('jjmnnmyqkc');
    table.timestamp('udlyelynyx');
  });
  await knex.schema.alterTable('qwhjownkik', function(table) {
    table.float('fkpmcwzblc');
    table.bigInteger('xewhtfkwys');
    table.text('blvijzeqxq');
    table.boolean('fmzowdnkbq');
    table.bigInteger('bipgqxjwbq');
    table.text('eomdhatrqb');
    table.float('rquihhrbav');
    table.boolean('klmbqvhrnp');
  });
  await knex.schema.alterTable('upjvqtedoq', function(table) {
    table.boolean('txqnuprtmw');
    table.boolean('udgxvdiutb');
    table.timestamp('egaaipaazj');
    table.bigInteger('pdzgoqcdgf');
    table.timestamp('oduzxkoxdo');
  });
  await knex.schema.alterTable('wdialenboa', function(table) {
    table.json('jywnapmanl');
    table.json('uhbfdqdgyr');
    table.string('jueatfawwq');
    table.bigInteger('bnisvhzbfq');
    table.integer('jshuyikpjh');
    table.bigInteger('qhbxocicqr');
    table.text('bnbubpeixl');
  });
  await knex.schema.alterTable('svcxzutimr', function(table) {
    table.boolean('eihioiyfce');
    table.integer('kkbfasftmj');
    table.integer('torudgfsho');
    table.timestamp('toueqnmdvb');
    table.string('konmgmgwyu');
    table.float('ytdvtadsie');
    table.string('oegciqhvws');
  });
  await knex.schema.alterTable('euctpuvefk', function(table) {
    table.float('gpnpizwcwj');
    table.boolean('tfxzhhflyj');
    table.timestamp('vxdfdfnmku');
    table.boolean('qjzkohnqsb');
    table.boolean('yegzlhbbkw');
    table.bigInteger('mnwrfsxyce');
    table.boolean('wclonqjiij');
    table.boolean('jebnuevupe');
    table.integer('grqjphqwgc');
    table.bigInteger('etliyeyqpd');
  });
  await knex.schema.alterTable('bkmrchbcqg', function(table) {
    table.integer('ysrxfuxqwu');
    table.boolean('yzhhlcgtgl');
    table.bigInteger('jinxcduogo');
    table.timestamp('nzpzuydxsh');
    table.json('kqxduthdhn');
    table.float('zblsufuuyb');
    table.integer('sxzecueifw');
    table.timestamp('cgioaczqia');
    table.boolean('eoaqzkgsop');
  });
  await knex.schema.alterTable('ogamrzldcg', function(table) {
    table.timestamp('xszobnnabb');
    table.text('pcibvziyqu');
    table.bigInteger('xnxbzpjecj');
    table.integer('afvswoitpp');
    table.bigInteger('yzabmzwwna');
    table.json('okgpojrnzn');
    table.json('qdgqrvtfja');
    table.json('bimhhwatga');
    table.timestamp('ocgodbxpom');
  });
  await knex.schema.alterTable('zmolmnrhyy', function(table) {
    table.text('tsgdfqvbib');
    table.string('qzcvcleyfs');
    table.json('kcpftjzptn');
  });
  await knex.schema.alterTable('pofvjgofti', function(table) {
    table.text('udxficilol');
    table.string('nymfhfzuiy');
    table.json('wigafcaiwo');
    table.integer('plpvfvotlp');
    table.float('qbxbxnzvbz');
    table.text('pfkytmqfye');
    table.float('cvsgdjhkbs');
    table.text('lmpejextlh');
    table.text('munhaamlvk');
  });
  await knex.schema.alterTable('wjpzboktdd', function(table) {
    table.text('veugztskhr');
    table.float('nislctqptr');
    table.timestamp('vptstjrsmu');
  });
  await knex.schema.alterTable('widsgdcngd', function(table) {
    table.boolean('tafkfmhxbe');
    table.integer('wdyyfulbhj');
    table.bigInteger('ypxwuyevzr');
    table.json('zdueelcnkb');
    table.string('cdcaiwclsw');
    table.text('mgsrmbiapt');
    table.boolean('cdlzovnuis');
    table.text('bxvecaulhb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};