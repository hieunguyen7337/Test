'use strict';

/**
 * Migration: 20240119005611_ubgmiwbkrfhqqag
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rklaflvqpc', function(table) {
    table.float('uhydmbcpmm');
    table.text('vcxvnkrkta');
    table.string('xydinbvfua');
    table.float('mppitdsrfy');
    table.bigInteger('mapbvqifql');
    table.json('jahxorxgma');
    table.boolean('hvbfgisfre');
  });
  await knex.schema.alterTable('lygluleetp', function(table) {
    table.timestamp('qljheapsxw');
    table.float('hkezsivctc');
    table.json('czrwdthfur');
    table.json('nctglwicqg');
    table.string('ytjelgwgcd');
    table.bigInteger('qeegkdxdzc');
  });
  await knex.schema.alterTable('guzjqvxizq', function(table) {
    table.string('hqtzzctwhi');
    table.integer('ybmghkacrg');
    table.text('oajsfqdmzh');
    table.json('gcuyawuupe');
    table.json('aqinnspydv');
    table.bigInteger('skcsujpysq');
    table.text('axbxvdrloe');
    table.text('zqebjkixbi');
    table.text('vlyfszyvnk');
  });
  await knex.schema.alterTable('wgnlltxsmo', function(table) {
    table.integer('pdbblsytlz');
    table.text('leuzvztdfm');
    table.boolean('mhqofgadai');
    table.text('wouaobulxl');
    table.json('pumuobfodl');
    table.text('hqphlfrwnh');
    table.text('iqigsvbxld');
    table.timestamp('uzefioomir');
  });
  await knex.schema.alterTable('qdpjgqkzbh', function(table) {
    table.string('qdpxrkjyoi');
    table.integer('shpanztgro');
    table.timestamp('llfckopirs');
    table.float('vcsdjwrssc');
    table.text('mcprdqijdp');
    table.boolean('jpllwezfcg');
    table.float('azcrhcukgz');
    table.float('lfcbuyjixr');
    table.text('xwmnhyofax');
  });
  await knex.schema.alterTable('zbehknvktn', function(table) {
    table.boolean('qcwovzwsgf');
    table.json('bepabhafjr');
    table.float('nlqmphlvbz');
    table.string('ffuxtbphxu');
    table.text('thflwfakft');
    table.timestamp('guxfhunfgm');
  });
  await knex.schema.alterTable('wtwvoklpst', function(table) {
    table.json('zhlshbjvaa');
    table.json('ocasleihnr');
    table.timestamp('iuwtdlrihw');
    table.timestamp('slbqfycplk');
    table.float('frwyusosgd');
    table.float('lzxjvkxbyr');
    table.bigInteger('ehqmagcqad');
    table.float('obdfphijrr');
  });
  await knex.schema.alterTable('ybxsaijjde', function(table) {
    table.bigInteger('zlywcqylfk');
    table.text('icynwwgneb');
    table.integer('aljittfmgn');
    table.boolean('fwqchervjg');
  });
  await knex.schema.alterTable('enkhxmjowh', function(table) {
    table.bigInteger('bhpbibxiis');
    table.timestamp('yspnhwlyzt');
    table.bigInteger('hxbcoyhnmo');
    table.bigInteger('jizispqbgx');
  });
  await knex.schema.alterTable('vmaiyiwzyy', function(table) {
    table.text('vpsvovaygk');
    table.json('gkylxwjqgt');
    table.integer('jhalvcuqwr');
    table.timestamp('pdmvlyknlt');
    table.integer('buscvxbzns');
    table.float('axwypicnbf');
    table.string('mefbqgkcrz');
    table.boolean('myjdhxvlvb');
    table.string('ufodyvsgsa');
    table.text('pubkiygxly');
  });
  await knex.schema.alterTable('cwmuorgzax', function(table) {
    table.integer('oolygabgvg');
    table.string('nvzpllxwgi');
    table.string('ygwmfxpxik');
  });
  await knex.schema.alterTable('gxnbbwoste', function(table) {
    table.integer('anouoqngdi');
    table.string('xiqbhgibsl');
    table.bigInteger('wamqnqlcdh');
  });
  await knex.schema.alterTable('xhmsturags', function(table) {
    table.text('imomrjbkws');
    table.json('vwnxgaqoxr');
    table.float('stqcagmguf');
    table.timestamp('liiqrpafqw');
  });
  await knex.schema.alterTable('xwzweoxvhp', function(table) {
    table.timestamp('jtzpfkgmth');
    table.text('vfsngybuxw');
    table.bigInteger('awsfknsodk');
    table.text('tjieeokwua');
  });
  await knex.schema.alterTable('ifveekzkhr', function(table) {
    table.string('gviraknuuc');
    table.json('xsidtqrett');
    table.json('qmlgxqxntd');
    table.integer('ekekgjxflx');
    table.string('mwwjdvistc');
    table.timestamp('lfkemmicmd');
  });
  await knex.schema.alterTable('myatztglkq', function(table) {
    table.boolean('aixnnoamkf');
    table.boolean('vixwskotcr');
    table.bigInteger('vsiupihwvr');
  });
  await knex.schema.alterTable('wodecbmrax', function(table) {
    table.boolean('owfwpxdfzh');
    table.float('huehbdivqq');
    table.float('jldylyypxq');
    table.json('irrpsbcnkj');
    table.timestamp('ztcfkeoqvr');
    table.string('qxnpgcdytr');
    table.timestamp('clxmltugzi');
    table.boolean('psslnghaqc');
    table.float('qvaiywfgis');
    table.text('pjynyredyl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};