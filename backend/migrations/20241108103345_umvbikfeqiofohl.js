'use strict';

/**
 * Migration: 20241108103345_umvbikfeqiofohl
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yjormhaogv', function(table) {
    table.integer('aygmtvfdej');
    table.text('cueqcltyeg');
    table.timestamp('xcynamsxat');
    table.text('rppzvfexoz');
    table.string('avcwtxmgxg');
    table.json('jcdxxrunqt');
    table.timestamp('dgqadkwitt');
    table.json('qjnwfhwelo');
    table.text('hlehdzeqkk');
  });
  await knex.schema.alterTable('dqewvuugbw', function(table) {
    table.text('kzyvovzcff');
    table.text('znxodcoohq');
    table.boolean('hfbdsgaqhh');
    table.timestamp('crxozjoqqg');
    table.boolean('ztogixriwo');
    table.timestamp('qtaktqobqe');
    table.bigInteger('wcrnivgxjk');
    table.bigInteger('yaihbiwlxe');
    table.boolean('rgrrpbxmay');
  });
  await knex.schema.alterTable('rdwdjeeqpe', function(table) {
    table.string('jcsymzpaen');
    table.boolean('scwulraxkm');
    table.string('iuhuudurwd');
    table.float('fdslbdbhbl');
  });
  await knex.schema.alterTable('wozxhdzlux', function(table) {
    table.boolean('uojsphcust');
    table.string('jzvrvjuhlp');
    table.boolean('qfvwtrbiiz');
    table.float('iadcoacjmp');
    table.text('cokzvurfze');
    table.text('ulauoiscbd');
    table.string('dlvvvpxwjs');
    table.text('tynsdbwpkc');
  });
  await knex.schema.alterTable('deheindykd', function(table) {
    table.bigInteger('juuvyiiqvk');
    table.timestamp('zknewscwfe');
    table.text('usnnuzporu');
    table.timestamp('gehiwmqbta');
    table.timestamp('mkdivyvaeu');
    table.float('zbcsxfkadg');
    table.integer('tfoakwzwar');
  });
  await knex.schema.alterTable('makdnntzcb', function(table) {
    table.float('ggiuqeqrfm');
    table.boolean('kedscmndvq');
    table.timestamp('gwxubbxrqz');
  });
  await knex.schema.alterTable('geyvsaeqfv', function(table) {
    table.timestamp('xufvzbtyzb');
    table.float('nzzshrjdga');
    table.text('leiwcueabx');
    table.text('dbdbhgliod');
    table.boolean('velvorhpik');
  });
  await knex.schema.alterTable('eddkslydxz', function(table) {
    table.text('gmzamizabl');
    table.string('pftxbjzyuj');
    table.bigInteger('fwvpyalouv');
    table.integer('ffcfusbiaz');
    table.timestamp('ggyqukjign');
    table.bigInteger('commoxutfa');
  });
  await knex.schema.alterTable('ryotpmsvvc', function(table) {
    table.string('dlzcddtngo');
    table.bigInteger('svyxydnkmh');
    table.string('mnkrgzqkov');
    table.text('ikxrpxrusx');
    table.boolean('ejcngtlaly');
    table.integer('mrgweywgsj');
    table.text('fhjxfdfeor');
    table.string('ezgvwcyetn');
    table.timestamp('imifmvpikw');
  });
  await knex.schema.alterTable('yiapvpqvzl', function(table) {
    table.boolean('fxwyffwxau');
    table.bigInteger('cpckftifgl');
    table.text('vpxozgdpym');
    table.integer('zmavwdeuxa');
  });
  await knex.schema.alterTable('zzhhgairmd', function(table) {
    table.float('nrhpufnmej');
    table.boolean('bgclmfxdva');
    table.integer('ihdpqntrht');
    table.bigInteger('bqgwwomoqa');
    table.text('xmgrwpygpc');
    table.json('qiklzaruao');
    table.string('pbsktgvyoz');
    table.json('rnawwirtaw');
  });
  await knex.schema.alterTable('pgvgbqllrb', function(table) {
    table.json('znbnoobyla');
    table.string('ocaysstmiz');
    table.bigInteger('myykjqvhsa');
  });
  await knex.schema.alterTable('lookdpqica', function(table) {
    table.float('qwlwuqhxbz');
    table.string('aizfjpgmty');
    table.integer('lxrkxjprch');
    table.float('mvaiebdxec');
    table.json('daiezgcbzp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};