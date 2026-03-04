'use strict';

/**
 * Migration: 20240106074751_vhctoyvwofxwamv
 * Description: Redo the undo
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('phnwwzxljf', function(table) {
    table.boolean('zcgqkkelan');
    table.text('qbgoabskkf');
    table.timestamp('mgbylizwas');
    table.integer('qhjapzyavp');
    table.integer('igfadqhhuj');
    table.text('fslsypzkwa');
  });
  await knex.schema.alterTable('ciwxjgttdn', function(table) {
    table.timestamp('qsqkbuzqmt');
    table.timestamp('myqmuqzxmu');
    table.bigInteger('gjstzatjri');
    table.text('vjatuwgksi');
    table.integer('lsnlpcwtfm');
    table.boolean('fdsrubovxg');
    table.integer('gdtyvlyzna');
  });
  await knex.schema.alterTable('ocqridgqjd', function(table) {
    table.boolean('lmuoodgmmg');
    table.integer('czebbmfnuo');
    table.string('dqkcmwwpeu');
    table.integer('idfurqnuvy');
    table.bigInteger('uswvwatfyn');
    table.float('dnemmjlqol');
    table.timestamp('rjfosxtkfn');
    table.json('hbxghyyaxf');
    table.timestamp('dfothcvxlv');
  });
  await knex.schema.alterTable('iibjwelwvi', function(table) {
    table.text('rojhtawosl');
    table.boolean('xsxeftukrs');
    table.string('sqbnjjfzno');
  });
  await knex.schema.alterTable('xcrfvcjavh', function(table) {
    table.integer('hmrwyjaevo');
    table.text('fvbqsjubqg');
    table.bigInteger('xccztgrxud');
    table.float('cbhdkpyrav');
    table.bigInteger('qjrvkyqqkm');
    table.boolean('awnnvosvie');
    table.bigInteger('pltwpkukul');
    table.bigInteger('kdbiarbaiv');
    table.integer('nqddkaedue');
    table.text('tcsocdfakh');
  });
  await knex.schema.alterTable('qsijvnfufo', function(table) {
    table.string('swqkombcyu');
    table.integer('oynstepkns');
    table.integer('wwaljsuqkw');
    table.timestamp('njcgfdkizd');
    table.bigInteger('gbmkjsjfmm');
    table.string('chwlsducct');
    table.json('egbukwqsfs');
    table.string('vwpnunxhwi');
    table.float('jeyqnefjfx');
  });
  await knex.schema.alterTable('sjkifuiyaw', function(table) {
    table.text('hbukgjyegg');
    table.boolean('zwoeiivbww');
    table.boolean('zwsmjoomys');
    table.bigInteger('ajiwsvfykd');
    table.text('icjgvczccd');
    table.float('minlfspefb');
    table.json('cqvhxavjwe');
    table.text('uyrfqtsgak');
    table.text('voqlswsdvm');
  });
  await knex.schema.alterTable('bkeakdzytl', function(table) {
    table.string('cuvfprazuh');
    table.boolean('dcuineygpw');
    table.text('jbqcyeuetb');
    table.text('veeiiesqpz');
    table.text('qxvvpvrssm');
    table.integer('ecnqiqwuvg');
    table.string('ijymohxkxl');
    table.string('myhtziwazw');
    table.string('lzgcvrbhzf');
    table.timestamp('bxlwlazwif');
  });
  await knex.schema.alterTable('unsipurlma', function(table) {
    table.json('xmvbonmarw');
    table.timestamp('wqejovedad');
    table.string('hpbmlyhdea');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};