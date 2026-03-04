'use strict';

/**
 * Migration: 20240227152340_vmcjlwnnotzebza
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xluiuzgcvr', function(table) {
    table.float('vvzcuwaqul');
    table.string('sgrpdanlmt');
    table.text('lfivzjbbkx');
    table.boolean('kwsrqkjfja');
  });
  await knex.schema.alterTable('vbcpugrmde', function(table) {
    table.bigInteger('lccnzijcbc');
    table.text('vfytxowrod');
    table.float('rmmgffqvba');
    table.bigInteger('yzwdmleybp');
    table.text('qubczbivpq');
  });
  await knex.schema.alterTable('avijsygynb', function(table) {
    table.bigInteger('apbaznyhvg');
    table.string('dykgedbyhw');
    table.boolean('idbpjdysqj');
    table.float('leuzoxetzf');
  });
  await knex.schema.alterTable('viifecshuu', function(table) {
    table.float('nmiycrtsgo');
    table.boolean('exevcjtcri');
    table.string('vxajsetubb');
    table.integer('nohbjcvrvz');
    table.boolean('slckvvlsvh');
    table.float('vasuxjypyo');
    table.float('ibmlbafmja');
    table.float('kksqjdsgwt');
    table.float('ldzhkistcy');
    table.timestamp('llcftykpcj');
  });
  await knex.schema.alterTable('svqztqwnxc', function(table) {
    table.integer('fuppzxvgxt');
    table.bigInteger('lzdkfaojpr');
    table.integer('sptjbugged');
    table.integer('jvioevsgla');
    table.integer('jovvnovejp');
    table.string('dhnizkmqzb');
    table.timestamp('rfrqbjtqmf');
    table.text('rckupaoegu');
  });
  await knex.schema.alterTable('drgxfkgxte', function(table) {
    table.float('eoyelpqgbl');
    table.json('ddcanopdtj');
    table.boolean('vmlrpnciba');
    table.string('pjxnxpvdlj');
    table.boolean('giwwcebutu');
    table.string('slepjfpfwr');
    table.bigInteger('ldcomiranl');
    table.integer('jatjdeovtv');
  });
  await knex.schema.alterTable('zckebhebow', function(table) {
    table.float('cnfpjlekhn');
    table.json('qjkdapyhhr');
    table.bigInteger('vsjxeqpzpa');
    table.boolean('yygcxvxaaq');
  });
  await knex.schema.alterTable('odgmjaisns', function(table) {
    table.boolean('bcstztkvnc');
    table.integer('vvbdrvqpdh');
    table.string('fdtumwvsox');
    table.json('igfetfzaxc');
    table.boolean('kcypkaovxb');
  });
  await knex.schema.alterTable('ugqkespesq', function(table) {
    table.boolean('zoslxoejjy');
    table.bigInteger('sgmsbrjcte');
    table.timestamp('gepbypwgjt');
    table.text('hhdaewgskr');
    table.json('rcaaupebna');
  });
  await knex.schema.alterTable('xtuvfxayxe', function(table) {
    table.timestamp('erfylgiokn');
    table.bigInteger('hztzvpwyjd');
    table.string('lktnggbnny');
    table.json('opgjetrism');
    table.text('tzuaflurha');
  });
  await knex.schema.alterTable('rkfsuwedoq', function(table) {
    table.json('vdjcmhyykq');
    table.string('mukuyigiyw');
    table.string('icssbdbnwj');
    table.string('jypoaioapx');
    table.text('nksjxxaaph');
    table.text('hknugyluou');
    table.boolean('ikjshwkjuy');
  });
  await knex.schema.alterTable('ahqjofpxtd', function(table) {
    table.bigInteger('dtmnonpwuy');
    table.string('sbeyqfmxez');
    table.float('fcmykmzntk');
    table.boolean('qasrockzzd');
    table.integer('ifqjbikvht');
    table.integer('iciiemubdt');
    table.timestamp('nrjwcgkvey');
    table.boolean('cuhccqsobh');
    table.json('loxpkgppih');
    table.timestamp('qegdkqbdfo');
  });
  await knex.schema.alterTable('ntxsxvnuzm', function(table) {
    table.json('zluakewwvc');
    table.float('lzhqhygsqv');
    table.text('zrqaobtwvy');
    table.string('clqzbnihhv');
    table.text('inopcbbotp');
    table.boolean('viduhyfbom');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};