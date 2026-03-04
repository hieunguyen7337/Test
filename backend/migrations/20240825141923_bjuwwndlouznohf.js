'use strict';

/**
 * Migration: 20240825141923_bjuwwndlouznohf
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('oqgzymxnii', function(table) {
    table.bigInteger('sjlgnheckm');
    table.bigInteger('zxjbbjjzyb');
    table.bigInteger('myezjliswk');
    table.integer('emtvnsharg');
    table.json('ngwsenxycy');
    table.float('wafacaxprd');
    table.boolean('wqfagkfuts');
    table.string('uemgewapny');
  });
  await knex.schema.alterTable('ylwnoflzap', function(table) {
    table.json('gwndssiakk');
    table.text('bzhzsvevoz');
    table.bigInteger('vogrccgyjl');
    table.boolean('ijlhaeeywb');
    table.text('qhuxwugljy');
    table.text('nnlqotsths');
    table.bigInteger('iwureiqgno');
  });
  await knex.schema.alterTable('kfcqsstqpb', function(table) {
    table.integer('yxkygvekoe');
    table.boolean('efnyrypujo');
    table.string('gosojoeqns');
    table.json('bholzqmqlo');
    table.float('njakayiztx');
    table.timestamp('fgzrkuxmwz');
  });
  await knex.schema.alterTable('jmrcezaokq', function(table) {
    table.string('rivzmyxupg');
    table.timestamp('tyvyrqmdgr');
    table.string('aufybxqfgs');
    table.text('truucootxf');
    table.integer('sbgsgymorn');
    table.boolean('zcvlkcujmp');
    table.integer('azhdwkwfyz');
    table.string('cttjpgbisp');
    table.timestamp('kjnwflkiil');
    table.boolean('tinezmjoat');
  });
  await knex.schema.alterTable('nmfzevsrop', function(table) {
    table.timestamp('dzjfvjbmzs');
    table.integer('treggytojm');
    table.float('gtiauoavxm');
    table.string('wfpojhzqit');
    table.float('zfytihjkac');
    table.json('tffdohemno');
    table.bigInteger('erwcbfhhiw');
  });
  await knex.schema.alterTable('qouubuxhxp', function(table) {
    table.boolean('bmdwhalumd');
    table.float('qlzdohrvjg');
    table.timestamp('inyplbppgg');
    table.boolean('enrngizllw');
    table.string('rogavighjl');
    table.integer('ccyndlfryy');
    table.json('mwpqanunrc');
    table.integer('mtitmjyykj');
    table.float('fdcayxmsvp');
  });
  await knex.schema.alterTable('hkcjiquqjp', function(table) {
    table.bigInteger('pcikevjcpe');
    table.timestamp('yymjkcltyn');
    table.bigInteger('smkrmlbngs');
    table.boolean('ohvhxegetp');
    table.text('rjxzxzwagi');
    table.text('ewvoatpwsy');
    table.boolean('edsmraqont');
    table.json('dhodckqesn');
    table.text('gvgyjvbwag');
    table.timestamp('zbknlogfuc');
  });
  await knex.schema.alterTable('rgwuvzovum', function(table) {
    table.text('afnobmhmgd');
    table.integer('kvzvmmjhil');
    table.bigInteger('sfetfdkiar');
    table.float('rpozbsstzf');
    table.timestamp('oospvmkizd');
    table.boolean('ueoisjebud');
    table.integer('fqycbbgtiy');
    table.integer('ukjdnaxkoh');
    table.integer('bfhesqjyzs');
  });
  await knex.schema.alterTable('kpagmhnpdx', function(table) {
    table.text('zpheokuvib');
    table.float('hmedrfvjis');
    table.string('wnutnnlnzj');
  });
  await knex.schema.alterTable('yuaybcmdhk', function(table) {
    table.text('hamctjoqyv');
    table.text('vdevnjtdkj');
    table.timestamp('pfvbygwwne');
    table.string('hlzljrpswp');
    table.string('zwcdevzoet');
  });
  await knex.schema.alterTable('ufucdvwaxm', function(table) {
    table.integer('gpknvgyakz');
    table.string('tuhmwfzgwo');
    table.timestamp('rakzplcxpj');
    table.json('alhyrtwdkz');
    table.text('blbneiocgx');
    table.float('qmyiqlfmgr');
    table.timestamp('fvciqdascz');
  });
  await knex.schema.alterTable('lmqdcpzjza', function(table) {
    table.text('qqhyiwqcyp');
    table.bigInteger('wvysdsddyg');
    table.bigInteger('hehaxkwiwj');
    table.float('spcempsfzu');
    table.float('idrvpuevvf');
    table.integer('kmzwfcyxzd');
    table.text('rgdxapwwnd');
    table.string('jakbdhanot');
  });
  await knex.schema.alterTable('bjndmolmhv', function(table) {
    table.string('xustxpwfxn');
    table.timestamp('wxeoiimhvr');
    table.boolean('dybhdccvdz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};