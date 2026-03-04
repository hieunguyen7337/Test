'use strict';

/**
 * Migration: 20240607004040_mfpovigloakrvpb
 * Description: Drop table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lpshbhkswz', function(table) {
    table.integer('vvobhrvanl');
    table.integer('xlmzcokeyn');
    table.string('cetdobhrhj');
  });
  await knex.schema.alterTable('qrhzkyhxrl', function(table) {
    table.boolean('xzauigwbtg');
    table.integer('zkxliolpqi');
    table.bigInteger('mguvgsjsbu');
    table.bigInteger('ymxyrgrepl');
    table.json('bglmltxijz');
    table.json('xnelaaqssh');
    table.boolean('iuwwefgvfq');
    table.timestamp('lvdvfjnksg');
  });
  await knex.schema.alterTable('tijlabwxyc', function(table) {
    table.boolean('mywndlcuip');
    table.json('ugkhdkticv');
    table.text('schusibwmy');
  });
  await knex.schema.alterTable('tubmlvlgwt', function(table) {
    table.bigInteger('rynrolprso');
    table.bigInteger('ifodmotecy');
    table.string('amwtvkgoyy');
    table.timestamp('olwmphckxu');
    table.integer('shxlmwdxmp');
    table.text('tpkbgumiri');
  });
  await knex.schema.alterTable('ckygxdfogw', function(table) {
    table.json('mxkodtwvuc');
    table.timestamp('dyhwlwuebm');
    table.float('vagbchbeew');
    table.integer('kdircyjvgg');
    table.bigInteger('xaqxgoxscl');
    table.timestamp('xkexdzcrva');
    table.integer('srxjmrmypr');
    table.string('famjifodnx');
  });
  await knex.schema.alterTable('inlvygmmhb', function(table) {
    table.timestamp('rbrjdymcts');
    table.integer('doodsuqqpu');
    table.timestamp('yvptvnpmba');
    table.boolean('fgfzlopffx');
    table.integer('slohosoduv');
    table.string('xgddiuzxec');
  });
  await knex.schema.alterTable('ureyazcncp', function(table) {
    table.bigInteger('ogsysskzqt');
    table.text('urjwcesvzp');
    table.string('yvvnnnshha');
  });
  await knex.schema.alterTable('wrbegncqmc', function(table) {
    table.string('gwkywenerh');
    table.boolean('sgdzadwleo');
    table.float('pyrcldzpgp');
    table.float('vzleeqegnh');
    table.float('zxgqcugqvc');
  });
  await knex.schema.alterTable('exatxkpyij', function(table) {
    table.timestamp('fmpaffjrvz');
    table.boolean('tmppocddzo');
    table.timestamp('uniqsukrob');
    table.integer('wpfeomkuwc');
    table.timestamp('jpvmyyxfpi');
    table.timestamp('glnvndxhfp');
    table.text('gltieuzlxm');
    table.integer('tsrjbrzgym');
    table.json('ynrelicpas');
  });
  await knex.schema.alterTable('hvlfouyrdr', function(table) {
    table.json('ozdkhamzbk');
    table.boolean('yavbrlqiql');
    table.json('zpahvkwqcj');
    table.json('qgeqpdtbxh');
    table.bigInteger('dnewvuanud');
    table.json('qnfcxepzwu');
    table.boolean('zshtictcxt');
    table.json('zzybhchvyf');
    table.bigInteger('iozmlhevhh');
    table.string('mqbvwttouw');
  });
  await knex.schema.alterTable('fxlbiywhui', function(table) {
    table.string('axkryldrwz');
    table.text('eivcedxmoz');
    table.boolean('bnmnylkegf');
    table.boolean('hyxfhdohim');
    table.float('ehvvneemav');
    table.string('wkfhfcgsti');
    table.float('kofgcskded');
    table.json('jipaitilld');
    table.json('ckzgqyuisb');
  });
  await knex.schema.alterTable('zrjryyjfbc', function(table) {
    table.integer('laektddsdf');
    table.boolean('rnupzbfxrf');
    table.bigInteger('nbdqseijxz');
    table.timestamp('ximvsmxtop');
    table.integer('omzpwclacq');
    table.boolean('vnnijdmrxr');
    table.text('dwqynefmin');
    table.string('kkpgpknulh');
  });
  await knex.schema.alterTable('dkkpqicbyk', function(table) {
    table.boolean('ooohkiwnum');
    table.json('zdidqhlnfu');
    table.string('okdjuqoxdu');
    table.boolean('fkgfeuniov');
  });
  await knex.schema.alterTable('ftrcryarbp', function(table) {
    table.float('kqdoqqjuls');
    table.bigInteger('zlpnshnhcy');
    table.json('egeacvibdp');
    table.text('rlmegjtyoe');
    table.timestamp('eauocbgoyy');
    table.text('dmwzzbbtci');
    table.json('gmlsqhikje');
    table.timestamp('ntxhmcorrs');
  });
  await knex.schema.alterTable('zhpvdpbrus', function(table) {
    table.integer('zgtxpgosyd');
    table.float('xivnotnmnd');
    table.timestamp('ecvduvniwl');
    table.text('kownbykzgq');
  });
  await knex.schema.alterTable('fghgeavmsu', function(table) {
    table.text('hruyatlkpy');
    table.integer('hntffckynv');
    table.timestamp('mbgdqhlswm');
    table.integer('kgoyemrlai');
  });
  await knex.schema.alterTable('frdhqxyhlg', function(table) {
    table.string('tpwiqjjppu');
    table.boolean('ilakuuprkh');
    table.integer('mfzqrioabz');
    table.timestamp('zlyqkpnreb');
    table.boolean('mkrjusqwxr');
    table.bigInteger('hninyuwayr');
    table.timestamp('iqxkwpozaq');
  });
  await knex.schema.alterTable('zmwafunqgu', function(table) {
    table.timestamp('ewlvkicwxp');
    table.bigInteger('igxenkvryx');
    table.string('oqmeynxgrm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};