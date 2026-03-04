'use strict';

/**
 * Migration: 20241125032555_mabnxetsopqgkou
 * Description: Rename field
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vwzvcxdsmz', function(table) {
    table.boolean('athcqzigar');
    table.string('eoiubeyqxc');
    table.json('myzxdiibrm');
    table.timestamp('jblwgjogco');
    table.bigInteger('qcwowzhqpz');
    table.string('wgsoycbtvf');
    table.boolean('aisvgzqfsb');
  });
  await knex.schema.alterTable('mkmqzlhldq', function(table) {
    table.json('kyqbpijtwz');
    table.json('egpcwajyzy');
    table.string('wumsngjfqa');
    table.text('vbxwbzlckd');
    table.float('ugkuviwfbq');
    table.timestamp('lnrzcvrtvn');
    table.boolean('vkurzlhcio');
    table.boolean('ugsukumivm');
    table.integer('bzotrgtvuy');
    table.float('viyptbflfj');
  });
  await knex.schema.alterTable('zrbxosscjh', function(table) {
    table.boolean('ydguaqpazf');
    table.string('cbfgmzcxux');
    table.json('ytryjhdkxb');
    table.float('vbpsjnrwtu');
  });
  await knex.schema.alterTable('vglivcemkt', function(table) {
    table.text('vwvdwdvsoj');
    table.float('mgibltvyzx');
    table.string('nfgdwfxape');
    table.boolean('piqjftqche');
    table.bigInteger('ydacljtpfl');
    table.boolean('nnpaavfica');
    table.float('mswurfugmh');
    table.integer('brybxcwhrp');
    table.integer('xfkqrlklzc');
  });
  await knex.schema.alterTable('cfxuhdyzud', function(table) {
    table.text('kklyudjrik');
    table.bigInteger('vjsqbifoke');
    table.string('ybhcxpxkaa');
    table.bigInteger('paiqdbpjcs');
    table.timestamp('xfqafsjhfd');
  });
  await knex.schema.alterTable('lamiyaltcq', function(table) {
    table.float('avtrfnxklj');
    table.boolean('dzemqqssqa');
    table.bigInteger('naqnnjpvzt');
    table.timestamp('jrdrrptqbj');
  });
  await knex.schema.alterTable('aoopughxka', function(table) {
    table.boolean('dgdfznznwu');
    table.float('nwnjtqwquf');
    table.string('msezuzrxap');
  });
  await knex.schema.alterTable('pbrrykyhct', function(table) {
    table.json('lpdfnshsrb');
    table.json('tqczchxocu');
    table.boolean('kyqwjkdmkp');
    table.string('yorlajkkgl');
  });
  await knex.schema.alterTable('phekilubev', function(table) {
    table.json('jriczluoji');
    table.boolean('ibxohtfnbi');
    table.float('pdxkkjqyep');
    table.integer('ejpbidynzr');
    table.float('wfxlvrslgv');
    table.string('rslsrsuldx');
    table.json('vmdnjdfbno');
    table.integer('bbupkrzwku');
  });
  await knex.schema.alterTable('ztnxjzxerv', function(table) {
    table.json('rhagqyjnxt');
    table.text('cnjplkvpqm');
    table.json('bnblermhqj');
  });
  await knex.schema.alterTable('qhsrrboiwr', function(table) {
    table.text('hyzqacwthv');
    table.boolean('zfgbsibbyi');
    table.boolean('rwmrriralk');
    table.integer('rupbvokqtp');
  });
  await knex.schema.alterTable('gfvyttlwsn', function(table) {
    table.timestamp('ptrxgdpuji');
    table.integer('acvzdywyaf');
    table.text('uabkrkzigk');
    table.integer('ztyovlsjhd');
  });
  await knex.schema.alterTable('tepcsvvcfa', function(table) {
    table.text('pcndxrjcuj');
    table.bigInteger('crdpmrocjl');
    table.timestamp('uvuzqmgvat');
    table.boolean('sdjflmmpmw');
    table.float('blmlsqtbjp');
    table.timestamp('mqjcaojchd');
    table.float('uuhtmhtqzb');
    table.bigInteger('bvjriazteq');
    table.bigInteger('yztmquqvic');
  });
  await knex.schema.alterTable('pnmlxmwvwb', function(table) {
    table.timestamp('djfmibczht');
    table.timestamp('wuvkokedrx');
    table.boolean('fpzjabqyxl');
    table.json('qwpjeimrzz');
    table.boolean('qigaougxle');
    table.text('tbxcoiknhx');
    table.json('pfdlzshlka');
  });
  await knex.schema.alterTable('alonmzzgpg', function(table) {
    table.boolean('cntjktaxpg');
    table.json('ntvajcursj');
    table.string('lcvudnjbng');
    table.boolean('pqxfrxzvui');
  });
  await knex.schema.alterTable('mkcamwiszu', function(table) {
    table.bigInteger('ztgjknfjcw');
    table.integer('pctnmfpdrl');
    table.string('fsrbymgnuh');
    table.float('wbuuvczymf');
    table.string('affgpbbjae');
  });
  await knex.schema.alterTable('tcbfmgrfra', function(table) {
    table.boolean('mbbklluczh');
    table.string('yvtjnifzqm');
    table.timestamp('qlxospoheo');
    table.bigInteger('mafovtevcg');
  });
  await knex.schema.alterTable('ylvyfnkeax', function(table) {
    table.string('chavgyonwd');
    table.bigInteger('txkykubnni');
    table.float('lrxgazqxuk');
    table.string('hbltkbmusf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};