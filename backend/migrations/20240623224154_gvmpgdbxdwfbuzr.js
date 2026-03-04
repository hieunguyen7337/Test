'use strict';

/**
 * Migration: 20240623224154_gvmpgdbxdwfbuzr
 * Description: Redo the undo
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('miwkagrevi', function(table) {
    table.string('hzmttvoagn');
    table.integer('tsqgtgsuiq');
    table.integer('kpmylztjgg');
  });
  await knex.schema.alterTable('tcqwrqajkx', function(table) {
    table.integer('vvnejdglex');
    table.timestamp('napvbojpxm');
    table.boolean('mlgpsejwwm');
    table.text('sdqmrndear');
    table.json('eegrdwlpit');
    table.bigInteger('ynoxzopuvv');
    table.text('hjwyhvhnpt');
    table.timestamp('djdfsiqlfk');
  });
  await knex.schema.alterTable('kszwygdkuq', function(table) {
    table.timestamp('kwuczfaqbt');
    table.bigInteger('hdbsczbfyj');
    table.boolean('rzhytnejve');
    table.text('wuwukbitmr');
    table.float('krkjnndmce');
    table.bigInteger('ozbmctemxg');
    table.boolean('vdscgsphhl');
    table.timestamp('lkcbcrjdcn');
    table.boolean('uegkffayyj');
  });
  await knex.schema.alterTable('nmgsufbpuh', function(table) {
    table.text('idflcnbsie');
    table.json('yuwueqvxrw');
    table.json('asnmjaibgk');
    table.timestamp('xkqcngigig');
    table.integer('hatdrrcajq');
    table.json('cfjfpzzxty');
    table.timestamp('upajggovcg');
    table.json('ptgjmrbgdz');
    table.timestamp('bmhavzihdn');
    table.timestamp('ghqsnnrhjf');
  });
  await knex.schema.alterTable('evvknuuixo', function(table) {
    table.bigInteger('fabgfvrndv');
    table.timestamp('fpnuhgbxvi');
    table.integer('srhfyspjtz');
    table.json('nleqttcqmq');
    table.text('gorevrvwoa');
  });
  await knex.schema.alterTable('pizasdbbgs', function(table) {
    table.json('knhajvmllg');
    table.json('cmzeewchiw');
    table.json('vjoavmfsvz');
    table.float('rygeyjilyq');
    table.text('sojcbpgryk');
  });
  await knex.schema.alterTable('ftjhtoxlnt', function(table) {
    table.boolean('eukkwsfhri');
    table.json('evaanuriou');
    table.boolean('oldtkfszas');
    table.json('mieblfigcj');
    table.boolean('rwfuqnejqj');
    table.float('nriexuxfrx');
    table.text('kteyfzfunz');
    table.float('bqqcjcfetq');
    table.bigInteger('fppnbdvaxx');
  });
  await knex.schema.alterTable('ktkjvfsdyg', function(table) {
    table.timestamp('bvaqqnosuy');
    table.timestamp('bpotfokizm');
    table.json('coigudaiki');
  });
  await knex.schema.alterTable('fbpxhgqgxr', function(table) {
    table.text('auttwxnbhr');
    table.text('dojjckajea');
    table.float('xtcpesrqtz');
    table.json('kdzoirysta');
    table.bigInteger('wkuqtusvod');
  });
  await knex.schema.alterTable('lhhbufeesi', function(table) {
    table.json('kaxxawpyqc');
    table.timestamp('rlxlldmxlp');
    table.integer('ofnirruxbx');
    table.string('cgmsqokuqk');
    table.timestamp('nkrogdhbyy');
    table.string('qtpdavzwub');
    table.boolean('vinwebnjpv');
    table.bigInteger('jgbyfxqqbv');
  });
  await knex.schema.alterTable('zlmfdpotfu', function(table) {
    table.boolean('taktzzmqug');
    table.bigInteger('qfevghkgws');
    table.timestamp('byjlgmpofp');
    table.string('nhxpfyadkm');
    table.json('ixcyyeeptz');
    table.bigInteger('xhehilffnu');
    table.float('issbezxbdb');
    table.integer('xqnvqwzglb');
  });
  await knex.schema.alterTable('upvgbogptv', function(table) {
    table.bigInteger('lhfnxxtzyc');
    table.integer('mjrsuiyyhx');
    table.string('ugpzrmoigt');
    table.json('mslvikcfcq');
    table.boolean('wvembjherx');
    table.bigInteger('quezdmktwo');
    table.timestamp('scvhmxrbab');
  });
  await knex.schema.alterTable('gulivsoqst', function(table) {
    table.boolean('gkpryonuwl');
    table.float('bhrfhvrhve');
    table.text('zjkqmkgehz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};