'use strict';

/**
 * Migration: 20240622022754_gyjeadvzpulqgpl
 * Description: Please work this time
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zbhmirrrpe', function(table) {
    table.boolean('qbidzvpmxg');
    table.boolean('pjtqemcgim');
    table.integer('qmqtxrtgcn');
    table.json('sgimnlnzhr');
    table.text('gtramnsuwp');
    table.float('cqkrvvvuvb');
    table.string('ttvnfsykgs');
    table.boolean('pwjaykwcqq');
  });
  await knex.schema.alterTable('ivwsdvlywk', function(table) {
    table.bigInteger('jtuyvirmhj');
    table.float('mbnwgcgjac');
    table.bigInteger('mqgxieqgyr');
    table.string('xvbskyflrj');
    table.timestamp('zjqygxutof');
    table.timestamp('wkchaqzeqc');
    table.bigInteger('wkjkkzqmjo');
    table.timestamp('myngjzywqr');
  });
  await knex.schema.alterTable('pizezwhaer', function(table) {
    table.timestamp('zhvlllmmom');
    table.bigInteger('hualvwyxfb');
    table.text('ubsqegocue');
  });
  await knex.schema.alterTable('nzcedwdnje', function(table) {
    table.integer('miuhwaxgoa');
    table.float('wotltuwrmz');
    table.timestamp('ffisesoezf');
    table.float('yfarhxnvth');
  });
  await knex.schema.alterTable('zudovlriic', function(table) {
    table.string('vvzpdmfjfl');
    table.string('cyxjdloeuu');
    table.float('phgxcfbsos');
    table.string('ydzlysoeiu');
    table.float('dbsujxpfjb');
    table.text('uykerzvnao');
  });
  await knex.schema.alterTable('hxppxxkmuj', function(table) {
    table.bigInteger('zsyrwyrwft');
    table.string('tqqnifpeja');
    table.json('irtgfpseqn');
    table.json('pmfotcibpw');
    table.bigInteger('jiuitjgneg');
  });
  await knex.schema.alterTable('usgiumjyrl', function(table) {
    table.boolean('jnkfzwckmi');
    table.timestamp('sivpjozgpj');
    table.text('zriurfughq');
    table.text('noxlbpjnbu');
  });
  await knex.schema.alterTable('syqmmzxzuj', function(table) {
    table.string('vcnybqqoxf');
    table.text('uukgcmkqwk');
    table.json('pcgamxrehz');
    table.float('mulxpnwzni');
    table.float('eyverxikbg');
    table.float('glrjfnyzry');
    table.bigInteger('zeyzpkpgwb');
  });
  await knex.schema.alterTable('yraellbnhn', function(table) {
    table.json('twuzyqhfln');
    table.integer('xrcirvuvjq');
    table.string('qyjolcifzv');
    table.json('orxsctfyly');
    table.boolean('vfmevxgqbl');
    table.boolean('toyjihcrif');
    table.float('wapzhfnamm');
    table.timestamp('uvemvoayft');
    table.text('ikwgvlekoc');
  });
  await knex.schema.alterTable('vhzqodpjrv', function(table) {
    table.boolean('ihujtezprc');
    table.boolean('dnkhkntjiy');
    table.text('yjpqklmodw');
    table.boolean('gdtykhoeyv');
    table.float('zizjedhhmc');
  });
  await knex.schema.alterTable('mqppzfrbtt', function(table) {
    table.boolean('pbnlzibshc');
    table.timestamp('jjylmoudiz');
    table.text('pinqtdyivd');
  });
  await knex.schema.alterTable('dhjrwwlbab', function(table) {
    table.bigInteger('jzxkucrplj');
    table.timestamp('gtzfarakdb');
    table.bigInteger('wxcnuefsvq');
  });
  await knex.schema.alterTable('tkqmaktmsf', function(table) {
    table.bigInteger('lidujqezqk');
    table.boolean('wjqhvttdav');
    table.timestamp('mgpujeiczv');
    table.string('gdvwtkptgw');
    table.bigInteger('lsypaiqhap');
    table.timestamp('sfjmpptnmb');
    table.json('lzcswvdtcv');
    table.text('oaqhrxlvwo');
  });
  await knex.schema.alterTable('ocyudtookn', function(table) {
    table.json('qgjaoozeak');
    table.integer('rdpdpddflt');
    table.boolean('jgbaoshamh');
    table.float('rbyalipilv');
    table.json('posjacpohf');
    table.float('whaymwhknd');
  });
  await knex.schema.alterTable('unnzlgjzby', function(table) {
    table.json('bajeklijtv');
    table.float('icgzjfbkae');
    table.float('mlawxwuxxk');
    table.json('dzgnvvwbvh');
    table.timestamp('xbzbmyddud');
    table.boolean('ubiuvmuvqw');
    table.integer('zmorqnpzbj');
  });
  await knex.schema.alterTable('ikmfhrdjmd', function(table) {
    table.text('oahrvqizpa');
    table.float('xznxoahpmg');
    table.string('qzwkxjvlwq');
    table.integer('sdkpnxjgar');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};