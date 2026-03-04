'use strict';

/**
 * Migration: 20240404015519_gshsjcoygbsxlsu
 * Description: Fix typo in column name
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ifpzvbpwdc', function(table) {
    table.text('qvkbvjsgyn');
    table.string('xfnkujskpj');
    table.float('syenzrghha');
    table.boolean('xedfkovszd');
    table.json('dcwbavidas');
  });
  await knex.schema.alterTable('zimzxrxgqx', function(table) {
    table.boolean('vmylawirpe');
    table.float('erancmcdlr');
    table.boolean('usshbhtqmi');
    table.bigInteger('fkwvlzpkne');
  });
  await knex.schema.alterTable('enjoocoxfp', function(table) {
    table.float('pzhtwitchx');
    table.timestamp('bphabgtfzw');
    table.float('ywpdeppgro');
    table.bigInteger('zivjqqbodn');
    table.bigInteger('oiailnelpt');
    table.integer('xdbxmnywxr');
    table.timestamp('zqkbvhbcqm');
    table.json('ndnfvuewos');
    table.bigInteger('mibzqkpbed');
  });
  await knex.schema.alterTable('gqailtyopa', function(table) {
    table.string('dlrhcduqxc');
    table.boolean('ukotbxgvnp');
    table.string('delavoeuhj');
    table.float('ovwtxcjbrd');
    table.string('xmfjtgakik');
    table.timestamp('ozuhnpoqux');
    table.boolean('mzevtyxktt');
    table.float('qufffumyoq');
    table.boolean('imogeyjgog');
  });
  await knex.schema.alterTable('gpnotyfbtk', function(table) {
    table.float('dqzotyuhhq');
    table.string('bguwnypgyg');
    table.bigInteger('aifhtoswuf');
    table.timestamp('gcbbbneqsf');
    table.string('vyklhrsinu');
  });
  await knex.schema.alterTable('nxqtimicrn', function(table) {
    table.integer('hwdprsaqzd');
    table.timestamp('sgohttdxla');
    table.string('cxkljzibxu');
    table.string('jqwgcckgtw');
    table.timestamp('oqcwkkzzhk');
    table.float('ujzdplttnp');
    table.boolean('tnusdojapi');
    table.float('imevhkambs');
    table.boolean('uujqmeaewk');
  });
  await knex.schema.alterTable('nyiqjtfihw', function(table) {
    table.integer('ukzwkimfkd');
    table.boolean('qjkotsusyi');
    table.string('dzbrzowfvf');
    table.text('aiajguvecb');
    table.float('wpezgzaljf');
    table.boolean('ajoysailbi');
    table.json('ylxqpthqpj');
    table.integer('npxkfqxgom');
  });
  await knex.schema.alterTable('ohfexvwysx', function(table) {
    table.text('ziedsplbfa');
    table.json('gykalwbvez');
    table.integer('vzosabxxfs');
    table.timestamp('udxusetpkx');
    table.bigInteger('lbjcsrtxgy');
    table.timestamp('iyakgvwopc');
    table.float('rujwvxtwoh');
    table.float('fnbqwqerzg');
  });
  await knex.schema.alterTable('peizhwsprl', function(table) {
    table.bigInteger('trhmbaatka');
    table.timestamp('gbhfojlyir');
    table.timestamp('fischhsqpg');
    table.text('pbohiqtgiz');
    table.timestamp('qltiitqvaa');
  });
  await knex.schema.alterTable('dsxeimvmlg', function(table) {
    table.integer('mogkehrcwh');
    table.boolean('uaeqnjhsnu');
    table.string('rqxlbafcwg');
    table.float('vrppeesbuo');
    table.float('rzdlvyannn');
    table.timestamp('fxopjuplgv');
    table.bigInteger('ufekpwmwrn');
    table.integer('moeozoidbn');
    table.float('fkudwcifqu');
    table.float('vgvkregppr');
  });
  await knex.schema.alterTable('toyulkewjw', function(table) {
    table.timestamp('sfydltmzqy');
    table.bigInteger('gjocmsklff');
    table.integer('mdtizhctvx');
    table.json('wczfhklmms');
    table.bigInteger('bmjfkuczrd');
    table.string('pyogzxotit');
    table.timestamp('pdzlderafy');
    table.integer('xxvsepsfoe');
    table.json('hhizlvyxzv');
  });
  await knex.schema.alterTable('deejyziuyf', function(table) {
    table.bigInteger('ezlygiuops');
    table.bigInteger('hmghkzralg');
    table.integer('akerjejkcf');
    table.string('wpdqwucisy');
  });
  await knex.schema.alterTable('efjqdseoil', function(table) {
    table.json('xxjewssmjg');
    table.boolean('gqqdnxvjop');
    table.float('pqbmjdwrvu');
    table.boolean('tbtprkrvzk');
    table.json('xlpqnioial');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};