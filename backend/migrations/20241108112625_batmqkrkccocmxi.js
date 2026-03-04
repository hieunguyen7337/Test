'use strict';

/**
 * Migration: 20241108112625_batmqkrkccocmxi
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('skmlswjnbk', function(table) {
    table.integer('gjaayhwyrn');
    table.bigInteger('tbnxtsvnwq');
    table.timestamp('iagmxausij');
    table.text('ugvkvgyggk');
    table.text('xwfmeqypuz');
    table.boolean('uagtkbuyow');
    table.text('msdiskxtza');
    table.string('kxligrddjv');
    table.text('vamewvpkvi');
    table.integer('pmyssmddfn');
  });
  await knex.schema.alterTable('xxbfaqsbha', function(table) {
    table.boolean('wzytgxceqn');
    table.json('pqwzsldafr');
    table.integer('fxdaplwmgj');
    table.bigInteger('sgufclgqqj');
    table.boolean('lmtohtcxol');
    table.text('xvsvoybhoj');
    table.timestamp('jxvwnjqkpy');
    table.float('vcwtluhcot');
    table.integer('fxvcqrvovv');
    table.boolean('xgjnodyurr');
  });
  await knex.schema.alterTable('wbyotznxhc', function(table) {
    table.boolean('zxtndcwhij');
    table.json('yecfggbywp');
    table.string('wbwlffmznx');
  });
  await knex.schema.alterTable('hiiubkhfek', function(table) {
    table.boolean('lflroqylls');
    table.integer('vqmtrxlkyb');
    table.timestamp('grudltqfcb');
    table.float('otxnjenutx');
  });
  await knex.schema.alterTable('qgoztisubj', function(table) {
    table.bigInteger('cruumqmbcm');
    table.float('aekoweqmwl');
    table.timestamp('nabdslrsfk');
    table.integer('odfiqpomjy');
    table.float('ceurfhwqiz');
    table.float('cpolnisqdk');
  });
  await knex.schema.alterTable('yoarzmrqqy', function(table) {
    table.float('rvxctonsfk');
    table.float('wfavnoxlzu');
    table.boolean('jxdizbnlcs');
    table.text('ciezmlzdup');
    table.string('fpnxanuutm');
    table.timestamp('pyprthcamb');
    table.string('ffgtxcwnqn');
    table.string('izhymznzbs');
  });
  await knex.schema.alterTable('wgbyeejexs', function(table) {
    table.text('qijomiifsx');
    table.integer('ymjwhbwlyp');
    table.timestamp('pavqpromjc');
    table.boolean('ogrlhfzpcu');
    table.bigInteger('wgkaqdgyji');
    table.timestamp('ejypgrqzyx');
    table.integer('rxkkofhpsq');
    table.timestamp('crapoosazx');
    table.boolean('vvknxssase');
  });
  await knex.schema.alterTable('crikoefobl', function(table) {
    table.bigInteger('aswipmmacn');
    table.bigInteger('plzlwtyxan');
    table.string('mzzgsbgfrg');
    table.boolean('utilmyxcpx');
    table.boolean('qbluljouwm');
  });
  await knex.schema.alterTable('lgrfwbljyv', function(table) {
    table.json('oiauvkbwem');
    table.integer('rotganlpwr');
    table.timestamp('vrjbjfiqgs');
    table.json('rwwheveolc');
    table.float('hqmqmdcflx');
    table.bigInteger('taqsjataql');
    table.boolean('afpbjltgax');
  });
  await knex.schema.alterTable('nqosrleeol', function(table) {
    table.float('wjtarbjyzh');
    table.text('iewzlwpusj');
    table.json('xmxgmrycjt');
    table.string('lrjqbqxuyh');
    table.text('fdfouokloy');
    table.integer('dsygwllrwf');
  });
  await knex.schema.alterTable('qrnmgaljgu', function(table) {
    table.timestamp('lyndcsjuki');
    table.timestamp('gzqwpxvmzq');
    table.float('jutkipydwh');
    table.string('euiggcqrtq');
  });
  await knex.schema.alterTable('atknbovruy', function(table) {
    table.bigInteger('jpoipxzdtk');
    table.integer('clfxwlfama');
    table.text('otbehxnlin');
    table.timestamp('ptcfuuvcex');
    table.integer('kcqeyacriy');
    table.float('kfqdtyivhr');
    table.bigInteger('lweozodgdq');
    table.timestamp('fssprocnno');
    table.float('izocfbbbmy');
  });
  await knex.schema.alterTable('mpygxzwycu', function(table) {
    table.text('dmtmgozksk');
    table.integer('gdihenekgm');
    table.integer('qvzqnomuka');
    table.float('thirdregib');
    table.json('dwkwvpaocr');
    table.integer('fowwennsrm');
  });
  await knex.schema.alterTable('yegejavbek', function(table) {
    table.integer('eamqpynqwy');
    table.string('tmyzjmtinc');
    table.integer('pvxqcstjhm');
    table.bigInteger('dmdqawevdl');
    table.text('xdjdhwuedd');
    table.string('ftrtkboyaq');
    table.json('hhpiexuflb');
    table.bigInteger('xwsfguaefp');
    table.boolean('fabmmbukax');
    table.bigInteger('eqymqrdcvh');
  });
  await knex.schema.alterTable('hqkamecavn', function(table) {
    table.string('wcuyjvthhu');
    table.json('fzzljbxnsu');
    table.string('tiuymxrvur');
    table.timestamp('ikuahyntju');
    table.text('zevgcgspcu');
    table.float('gebiuedlxt');
    table.json('dmyuizwbcv');
    table.timestamp('ieapmfgrww');
    table.integer('mgsvknlrhw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};