'use strict';

/**
 * Migration: 20240627230000_bjcoilmvfujoiuq
 * Description: Undo previous migration
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kkspkgrcwr', function(table) {
    table.text('bueoansjrb');
    table.timestamp('ovtlfqtlom');
    table.float('jdrtkdctjo');
    table.text('lyxammcsoe');
    table.timestamp('uorhlocjza');
    table.text('uvzqwbhhcj');
  });
  await knex.schema.alterTable('qeishnleyk', function(table) {
    table.boolean('tsraroabjs');
    table.json('rjirvlhevs');
    table.bigInteger('jelegtncbi');
    table.float('ehcehhoguy');
    table.bigInteger('drjgazedcg');
    table.bigInteger('fqrkklfwny');
    table.bigInteger('fmciajznfx');
  });
  await knex.schema.alterTable('vdhpvqgkut', function(table) {
    table.float('biorelvmvl');
    table.bigInteger('gsvefpyqob');
    table.float('shnbukktdu');
    table.integer('ggnikobord');
    table.text('loljxudzqo');
    table.float('idaahxofpy');
    table.float('mjxmlttnvb');
  });
  await knex.schema.alterTable('rihivewwnx', function(table) {
    table.bigInteger('qtjpxuzyav');
    table.boolean('irjgxbyuko');
    table.bigInteger('wmihpjdhgz');
  });
  await knex.schema.alterTable('tsdircfmga', function(table) {
    table.text('jcjpkbgqpd');
    table.bigInteger('brxklsccxb');
    table.text('jhngdpaxdq');
    table.integer('qellsrgndl');
    table.text('nzlrxavwnl');
    table.json('kivgjvfxow');
    table.string('pnjhlbieil');
  });
  await knex.schema.alterTable('uczywrcucz', function(table) {
    table.float('ycddegkmkr');
    table.bigInteger('lnsxksgonk');
    table.float('rizphrkscm');
  });
  await knex.schema.alterTable('htdggzjphq', function(table) {
    table.timestamp('tpmrexahwb');
    table.json('vxckmudrfm');
    table.string('njawozcfli');
    table.text('rvbmkhkzes');
    table.timestamp('zvoplulmqu');
    table.bigInteger('uwucnihxla');
    table.json('zxdltqrzio');
  });
  await knex.schema.alterTable('tnrsqrzebx', function(table) {
    table.timestamp('cpxpjmsvig');
    table.text('mgjfwtxpqj');
    table.bigInteger('oclhpfzqki');
    table.boolean('ovrjxerwer');
    table.float('zabkwhukot');
    table.timestamp('kzsieozosn');
    table.timestamp('cmngafkysh');
    table.float('vfzoryyuxl');
  });
  await knex.schema.alterTable('lnmodvragd', function(table) {
    table.float('cgkaxhcwfk');
    table.float('zpteactctl');
    table.float('qfqvchfumc');
  });
  await knex.schema.alterTable('tytcbdtiev', function(table) {
    table.boolean('hqfujpousc');
    table.bigInteger('izvllypjgl');
    table.float('uxqyzkdlfq');
    table.float('dnkemgxlbb');
    table.text('djzhxdwmlr');
    table.integer('vxsfmvqnjp');
    table.json('qeuccmmxdy');
    table.text('nmnwsxjnsj');
    table.bigInteger('dmyppdvhhc');
  });
  await knex.schema.alterTable('kbghuvnuzv', function(table) {
    table.json('tvoynnlgzs');
    table.string('dxiotfhrrk');
    table.boolean('eulplilcam');
    table.json('xymkifzgyw');
    table.boolean('dytbzwsacs');
    table.bigInteger('avamofwyaa');
    table.json('ysrrfbgsku');
    table.bigInteger('gvawcsipan');
    table.json('jleojfttol');
    table.float('madnvgluhk');
  });
  await knex.schema.alterTable('hxscngtsuh', function(table) {
    table.bigInteger('gxvjqpzmkx');
    table.integer('lnfbhhoyxm');
    table.integer('hwduobkouo');
    table.integer('iymqfjnzav');
    table.string('woaurannut');
    table.text('ozdmkejxgu');
    table.boolean('suatzljbef');
  });
  await knex.schema.alterTable('wnramlxdiu', function(table) {
    table.text('eddnsufsmt');
    table.text('uinarxclwo');
    table.string('splsunansn');
    table.string('wqowrzagkx');
    table.string('dkwhpsmezk');
  });
  await knex.schema.alterTable('hateycuiar', function(table) {
    table.float('guuqbnwsxw');
    table.integer('dchgmvbpub');
    table.text('hnkupjhiob');
    table.string('nybgrkfgjk');
    table.text('cbiuelnziq');
    table.bigInteger('zgxqxqymcb');
    table.boolean('wasbesnecg');
    table.json('wmibjwhjqk');
    table.string('etclvavhua');
  });
  await knex.schema.alterTable('mzmjkxhhcn', function(table) {
    table.float('ktvjjwxlgh');
    table.bigInteger('svfaigfiip');
    table.integer('ebyfvyhxhn');
    table.string('lnuadlsjty');
    table.bigInteger('bzwcycncon');
    table.integer('vioiwmhqui');
    table.integer('zjqrdnygnk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};