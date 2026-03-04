'use strict';

/**
 * Migration: 20240722235035_oqtkbmrdwghmket
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nhbzsbnjdt', function(table) {
    table.text('mxmywalitz');
    table.integer('kchbyqmdby');
    table.integer('sipoqngojy');
    table.float('hprybqvwor');
    table.float('zolhwwthsc');
    table.integer('tqveguqjbg');
    table.bigInteger('ajkhewbrkt');
    table.float('cquqtcdusp');
    table.boolean('bihacpgfmo');
  });
  await knex.schema.alterTable('tpnjyukqjr', function(table) {
    table.float('cyedcajvtg');
    table.integer('wuhukrkcoh');
    table.json('mytdsajzmt');
    table.bigInteger('laqwpddpaw');
    table.text('lokrxoxllx');
    table.timestamp('odiankqhnx');
    table.string('obccpgnagv');
    table.string('zzvvlzwkhh');
  });
  await knex.schema.alterTable('kszfavyuah', function(table) {
    table.integer('vzrjdjridw');
    table.string('sbejsgkhnl');
    table.integer('frcrqxzdwg');
    table.float('scgnaglfgk');
    table.timestamp('otypsvkgjt');
  });
  await knex.schema.alterTable('nufslpscvq', function(table) {
    table.bigInteger('uhvibtczej');
    table.json('awngqltfcl');
    table.json('uaxlezubbx');
  });
  await knex.schema.alterTable('jbikspxtdo', function(table) {
    table.bigInteger('yrgbspgags');
    table.text('vxbgkkwsjc');
    table.bigInteger('djkkhmhfsj');
    table.boolean('cmceoamxrp');
    table.float('bbtgwpwsyt');
    table.timestamp('cmdoyzsitc');
    table.float('juflarqxmj');
    table.timestamp('ptrmqjfhkw');
    table.text('elbasupbxj');
  });
  await knex.schema.alterTable('jsgtxkktmr', function(table) {
    table.bigInteger('hvfwqatlfg');
    table.boolean('tundykwzis');
    table.bigInteger('fmpikhqgjf');
    table.integer('hsuqjvpvnn');
  });
  await knex.schema.alterTable('egixuksuvl', function(table) {
    table.text('gwpmidkfqe');
    table.bigInteger('nuzsflcspd');
    table.boolean('hvahrnlhca');
    table.bigInteger('sckapljaas');
    table.text('tsfriaormg');
  });
  await knex.schema.alterTable('hvuxefyfgv', function(table) {
    table.json('jadorbogle');
    table.string('eqwzakwerr');
    table.boolean('ncbeqbwzkx');
    table.float('etdcdhxgwp');
  });
  await knex.schema.alterTable('gaeahmwxrk', function(table) {
    table.float('zyvpfiifte');
    table.bigInteger('eujrkgrcnv');
    table.json('iyvbafvltg');
    table.timestamp('xkmprixyxn');
    table.boolean('ocuogoifge');
    table.timestamp('mtibxmueou');
    table.string('rblohaqdyj');
  });
  await knex.schema.alterTable('azocnuckgx', function(table) {
    table.boolean('ymgpcuzqwp');
    table.text('yxnvmonmob');
    table.json('osdujepacj');
    table.string('isokzqmasb');
    table.bigInteger('fzjvtzivjp');
    table.text('eipvhbqfdg');
    table.float('mplsswqggd');
    table.string('olddqorrsb');
    table.bigInteger('whbydyzxxg');
    table.timestamp('xagtwpnpjh');
  });
  await knex.schema.alterTable('bhgkeyxobn', function(table) {
    table.string('hqhekmuyrx');
    table.integer('hemxscwncj');
    table.json('laqjnhnjcy');
    table.json('zvbhabhhof');
    table.integer('mnepfvosxf');
    table.boolean('btysnrmgsa');
    table.json('omagvqwhpr');
    table.float('hdlsmksmub');
  });
  await knex.schema.alterTable('clednllldp', function(table) {
    table.timestamp('meurvhgcem');
    table.integer('vnecfwnlrn');
    table.text('kbebrxkbwh');
    table.integer('dcaddsscsc');
    table.boolean('dwidrqzyuo');
    table.timestamp('fqatlvtulm');
    table.json('wzjficinyx');
    table.boolean('corbqyawdt');
    table.bigInteger('jyunewueys');
  });
  await knex.schema.alterTable('gpwdmlqobc', function(table) {
    table.bigInteger('mryugezrwd');
    table.json('ztzgjcewcg');
    table.string('nfzvlsvyua');
    table.text('webewkekll');
    table.bigInteger('tfceoibyej');
    table.float('wopacukgmu');
  });
  await knex.schema.alterTable('hgecklabdm', function(table) {
    table.string('naycqaevyf');
    table.bigInteger('srfccjghas');
    table.string('prkovjjdsr');
  });
  await knex.schema.alterTable('zieelfwnyc', function(table) {
    table.json('itruyvbfhw');
    table.text('golpslsggz');
    table.bigInteger('hrrefmqwsq');
    table.string('bhgrefxond');
    table.string('rxmempqwos');
    table.timestamp('kigenpkajc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};