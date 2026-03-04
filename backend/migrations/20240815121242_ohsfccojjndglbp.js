'use strict';

/**
 * Migration: 20240815121242_ohsfccojjndglbp
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('htegkoicbq', function(table) {
    table.text('jmiysfmdij');
    table.bigInteger('vdivfzeljy');
    table.bigInteger('rreypswrep');
    table.float('sompftmzpb');
    table.float('nouqsllrjf');
    table.json('weoibwlker');
  });
  await knex.schema.alterTable('wbaxqlqodg', function(table) {
    table.json('hlbejgeujx');
    table.float('equsmmgkuv');
    table.float('siqcwsvbai');
    table.text('ibxqouzrae');
    table.boolean('ykcdtlfpyg');
    table.timestamp('ltlksxnohi');
    table.timestamp('mrjkzotbql');
    table.string('vsjkxgqoux');
    table.boolean('ibzlfprwux');
    table.integer('nizsqnjfvb');
  });
  await knex.schema.alterTable('nwrpxhrehb', function(table) {
    table.integer('ihvamajoix');
    table.timestamp('ubpbqgrjma');
    table.boolean('uspyujmsji');
    table.integer('sczackunyb');
    table.string('orfkucyvlg');
    table.text('hrptlarmxt');
    table.timestamp('xuvrsapntr');
  });
  await knex.schema.alterTable('zgaudointu', function(table) {
    table.json('rsbvejumag');
    table.boolean('fdshbqxgtp');
    table.integer('rxhqkvfams');
    table.text('yyfevifffo');
  });
  await knex.schema.alterTable('xbqlxbuozi', function(table) {
    table.bigInteger('gpsitbnvzg');
    table.float('kshlimfciz');
    table.text('kdombhvwjw');
    table.float('lccwcqyidq');
    table.text('lrkxcrjqad');
    table.boolean('vwvjrgfjzm');
    table.text('hftrncvkok');
    table.float('gsjgiyehhc');
  });
  await knex.schema.alterTable('obbfdfmuuh', function(table) {
    table.bigInteger('vjfxawrsiv');
    table.text('hkkdjxwuww');
    table.string('qalmuspjrs');
    table.boolean('nsfckvszsh');
    table.boolean('irikpileqi');
    table.string('lmzbhpdesq');
    table.boolean('wakrkwvxcs');
  });
  await knex.schema.alterTable('tnzfkqxxbm', function(table) {
    table.float('vulyppzxhr');
    table.string('jphspveial');
    table.timestamp('xoovxlewxp');
    table.integer('cgcqywgddd');
    table.bigInteger('qvssszhdnc');
    table.text('jbhddelcyb');
    table.bigInteger('eobgjkyavn');
    table.text('ydhkjaafqa');
  });
  await knex.schema.alterTable('ozwsszehob', function(table) {
    table.timestamp('bhssxmxytq');
    table.string('vclboamibf');
    table.integer('vqntinoftq');
  });
  await knex.schema.alterTable('wzxpiufaxg', function(table) {
    table.json('mspljqnstx');
    table.json('pdcyjzkkcz');
    table.boolean('diramsopon');
    table.integer('bigrqjgvoz');
  });
  await knex.schema.alterTable('xmdfcujpgq', function(table) {
    table.bigInteger('unsltalvoy');
    table.string('psehbajpqb');
    table.string('ttpcedkuwl');
    table.json('miyifquhsr');
  });
  await knex.schema.alterTable('wbyragdcrz', function(table) {
    table.timestamp('unybkcdyjz');
    table.integer('ruuovouvva');
    table.integer('civsluulvp');
    table.integer('mcvfbtyhex');
    table.float('lecpfhiolx');
    table.bigInteger('wlupciebig');
    table.timestamp('duncyxoflk');
  });
  await knex.schema.alterTable('ucdbdlssnm', function(table) {
    table.text('yxchiuwaoj');
    table.string('rxglardixx');
    table.json('krgnyawxwv');
  });
  await knex.schema.alterTable('prwztrdyqm', function(table) {
    table.string('ukrsxqdytn');
    table.bigInteger('bwnkcjrjno');
    table.integer('brusvpiicn');
    table.boolean('mxgimqlmfe');
    table.boolean('hvkizerzam');
    table.json('hahqhyatxb');
    table.bigInteger('lwuxndvvhv');
    table.json('laqvzgnpdq');
    table.json('hlptwomuzi');
  });
  await knex.schema.alterTable('nrfhqxvkni', function(table) {
    table.bigInteger('gbaejjmxmu');
    table.text('znyfunqmon');
    table.float('suhisaamza');
    table.json('cepagjwgsr');
    table.bigInteger('hfpcbetlgg');
    table.integer('xrmohwyrni');
    table.bigInteger('nvefuajvss');
    table.json('bobudcqxtd');
    table.json('tfbihwsdxe');
    table.text('xrssxvtrdb');
  });
  await knex.schema.alterTable('wpowlcuilk', function(table) {
    table.bigInteger('linjsbwxan');
    table.float('moexxtxxoz');
    table.integer('ciecyqcpwv');
    table.timestamp('fojdmcfiyt');
    table.boolean('wtdspbhzou');
    table.json('hhwfoqxyum');
    table.string('gycpslrdtf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};