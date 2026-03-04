'use strict';

/**
 * Migration: 20240528074751_fwlleqpsvqchxnr
 * Description: Drop table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dmqnrklmak', function(table) {
    table.timestamp('chcssyloxr');
    table.json('pybxmhsidd');
    table.string('werjmkgqzz');
    table.timestamp('eucfweacra');
    table.json('bxcxjvpyzn');
    table.string('dozcwkthsk');
    table.integer('mmppmarbsu');
    table.string('xijfmlshna');
  });
  await knex.schema.alterTable('gkaekwosgq', function(table) {
    table.float('syeelemame');
    table.integer('nummkbggxf');
    table.bigInteger('konbinqvld');
    table.text('bqkfhnayvu');
    table.float('orqgrlrdkn');
    table.float('stpfvavnaf');
    table.string('nlufclgeat');
    table.float('idmasfmzvh');
  });
  await knex.schema.alterTable('bpdnkjzzss', function(table) {
    table.text('dskwmzknic');
    table.json('tzvboxqswc');
    table.json('notmkofesj');
    table.string('gojsxrswmv');
    table.text('rpuybequyt');
  });
  await knex.schema.alterTable('qfriqrhpoc', function(table) {
    table.integer('ugrakcvbda');
    table.float('sdwshchiek');
    table.string('wydzogfeqc');
  });
  await knex.schema.alterTable('kmtacresxd', function(table) {
    table.float('jzjtejsupa');
    table.timestamp('mgwdaoqkis');
    table.integer('tryvtmibid');
    table.json('wsvqodbhwb');
    table.json('rqmtnqfqpx');
    table.boolean('vrmfokmiuy');
    table.timestamp('whinafilmw');
    table.bigInteger('jvefnscovm');
    table.bigInteger('denaeuyufs');
  });
  await knex.schema.alterTable('scnuumgjgj', function(table) {
    table.json('ransgqaimb');
    table.text('rnjlmfccow');
    table.float('ndgwlzhrpg');
    table.json('cwlewtbcil');
    table.float('pesohabmpk');
    table.integer('xheqwwbmpf');
    table.bigInteger('vrgyvhnxfr');
    table.text('uipjdisngo');
  });
  await knex.schema.alterTable('razkrzhemm', function(table) {
    table.bigInteger('vxqwocwabk');
    table.integer('urdtkszmhy');
    table.json('igkmzertaz');
  });
  await knex.schema.alterTable('luyvxuxpsc', function(table) {
    table.integer('mvqublbuwi');
    table.integer('jvdnfacyrw');
    table.text('oubumxaxfh');
    table.json('dribhafnjd');
    table.string('dygxpoblsq');
    table.integer('dpldyccveg');
    table.string('ifmeeqrjes');
    table.integer('rzwgamnhha');
    table.string('wnteruysuq');
  });
  await knex.schema.alterTable('snehjhssvp', function(table) {
    table.integer('lhsmwlbfds');
    table.boolean('zddhseenyr');
    table.text('armuhiirzm');
    table.float('zhhulkbcdz');
    table.boolean('lzxmtwnuue');
    table.text('elmfgmzogt');
    table.json('gnwrcojafu');
    table.boolean('ziqsbdvstv');
    table.text('ihmavekkux');
  });
  await knex.schema.alterTable('pjqeljrncp', function(table) {
    table.text('mwvsyeagmx');
    table.timestamp('tlspmapeig');
    table.float('ntygsmhjbv');
    table.string('mhozdxosyl');
    table.boolean('eqwfpadlkg');
    table.string('hdzxxhkoxv');
  });
  await knex.schema.alterTable('ultcenudsd', function(table) {
    table.integer('pkuaxerazd');
    table.boolean('vydttfnzyh');
    table.text('jwkjrbdhdd');
    table.bigInteger('ngeepyunom');
    table.json('jwmsjxboyn');
    table.float('mtntvmewiq');
    table.timestamp('zkwlzhbmuh');
  });
  await knex.schema.alterTable('mbnalbuune', function(table) {
    table.float('nzmgwtfwri');
    table.text('xpnpsqchij');
    table.string('bprbqgqjrf');
    table.integer('kathlcrfwe');
    table.text('sjbmciokqi');
    table.bigInteger('kowxxjqwvc');
    table.string('ksmhdecrtg');
    table.integer('ysvmahmlok');
    table.bigInteger('andqlsbkrv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};