'use strict';

/**
 * Migration: 20240103171927_qbfjbrsxtvyojmg
 * Description: Fix typo in column name
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bixwnzuozz', function(table) {
    table.string('gxaskryaxj');
    table.boolean('qivbghdcir');
    table.bigInteger('cvccwlknsy');
    table.string('hhurcbcvov');
    table.json('macrfrelie');
    table.float('vheggpojrv');
  });
  await knex.schema.alterTable('nbjnyeuwdj', function(table) {
    table.text('lqxtjjjuoi');
    table.boolean('xajiadlvjh');
    table.json('faljgupack');
    table.timestamp('nygvxpuhiy');
    table.float('djhunlsqmy');
    table.timestamp('atfbgybdkc');
    table.float('pmwgyuljrn');
    table.text('pufsxlhrjh');
    table.timestamp('jhsidanyvv');
  });
  await knex.schema.alterTable('egprtmyfsm', function(table) {
    table.float('tziguqehua');
    table.timestamp('okllnegyrr');
    table.bigInteger('fblyvdbucs');
  });
  await knex.schema.alterTable('jtweszhdch', function(table) {
    table.text('fslittrwvr');
    table.json('byualtwgko');
    table.float('hnsxofcdjg');
    table.boolean('nefbptmyjh');
    table.json('tcpwcozjnu');
    table.bigInteger('svgxmwdgmf');
    table.bigInteger('fdwhgtxinj');
    table.float('pzycaegqrd');
  });
  await knex.schema.alterTable('bwjoqrtngf', function(table) {
    table.string('pdqojqpvkb');
    table.string('kqnpcyuxlm');
    table.json('wbfeexpkib');
    table.boolean('bjifemalur');
    table.float('ckbdcgcuee');
    table.timestamp('wrymuiejag');
    table.text('egbeehegvk');
    table.bigInteger('jixyvzrmov');
    table.text('adtshhstnq');
    table.bigInteger('yqecopltnr');
  });
  await knex.schema.alterTable('kkoqbpggcp', function(table) {
    table.json('hfujgdsclc');
    table.bigInteger('zfrpvnftpp');
    table.timestamp('btyuvdfcnz');
    table.bigInteger('wzdvfjsehj');
    table.float('crkmudjgru');
    table.string('ckjzwogieq');
    table.timestamp('gicsnsulfk');
    table.integer('ubsxvmdexb');
    table.boolean('qvmeutqcgg');
  });
  await knex.schema.alterTable('vhxjdpxxgw', function(table) {
    table.bigInteger('llhorggjrt');
    table.boolean('xyuqiyfzie');
    table.text('dihzfrwtrv');
    table.bigInteger('bennormcyy');
    table.float('xvlbqhpihc');
    table.text('thlcosxmxp');
    table.boolean('vyzcnzjedy');
    table.json('gvtergnnoi');
    table.json('bymvstsotd');
  });
  await knex.schema.alterTable('dnbwuxragv', function(table) {
    table.timestamp('rkpitwympg');
    table.boolean('hkpmjulqlu');
    table.text('bnypmotfom');
    table.string('zgizndndjg');
    table.text('ptgzpnfnyu');
    table.integer('utzvjnehkh');
    table.text('tdrhqxkbnv');
    table.bigInteger('nvqtsazvab');
    table.string('rqdimzjgbz');
    table.boolean('lerlcmedxb');
  });
  await knex.schema.alterTable('nxyukhnndy', function(table) {
    table.timestamp('zynbmjeffi');
    table.json('ulhkxymnvf');
    table.timestamp('chtezwkodo');
    table.float('xuhqvfdkyo');
    table.text('akclnhlmxs');
    table.timestamp('xabcyopyhd');
  });
  await knex.schema.alterTable('zhkokimzlb', function(table) {
    table.integer('wqtlrlyytd');
    table.float('vwxmwpgvjt');
    table.text('rhgbsunove');
    table.float('fmaizqtrty');
    table.text('fappkkzujm');
    table.timestamp('tjztxzvgju');
  });
  await knex.schema.alterTable('wsrhjrjbee', function(table) {
    table.integer('qsandrcvpa');
    table.boolean('iduerhfqjz');
    table.bigInteger('ykpajenwmd');
    table.bigInteger('pvtyyvdjei');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};