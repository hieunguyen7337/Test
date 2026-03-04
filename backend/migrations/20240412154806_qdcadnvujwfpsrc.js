'use strict';

/**
 * Migration: 20240412154806_qdcadnvujwfpsrc
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('akwhlmuiqh', function(table) {
    table.boolean('btpcdizslc');
    table.text('innafrutuk');
    table.bigInteger('qccwpklytc');
    table.boolean('uqmcoumsgd');
    table.text('bhzhfmpkbt');
    table.text('tsueemajqe');
    table.bigInteger('njvwkianch');
    table.timestamp('lbrtrchdlb');
    table.integer('jfkxkvijsd');
    table.string('eopwapkmxs');
  });
  await knex.schema.alterTable('ganwehreph', function(table) {
    table.string('nwkuyfsjuj');
    table.bigInteger('ccroskejxy');
    table.string('vcjdhgycsg');
    table.timestamp('waczvegubg');
    table.boolean('fvwzcdfqws');
    table.integer('qsrbpfyovw');
    table.integer('bbinvygguj');
    table.json('egxfpxqnnt');
    table.integer('xqylypltaf');
    table.timestamp('rafwpqcwsi');
  });
  await knex.schema.alterTable('uvbhpzvmbb', function(table) {
    table.boolean('irxdnxahsl');
    table.boolean('tfwptnolrz');
    table.integer('fqtcpxrpby');
    table.string('vtpshregne');
    table.text('bvdtnwtfsw');
  });
  await knex.schema.alterTable('svgcoxvucw', function(table) {
    table.bigInteger('stlqfzntiw');
    table.float('hrjqvplklf');
    table.boolean('iullvxntmf');
    table.boolean('myzukyfyjk');
    table.integer('eptqtuvhjj');
  });
  await knex.schema.alterTable('wnksyxhnsk', function(table) {
    table.json('wpzubjqsow');
    table.float('ztfyhfwhcs');
    table.float('temvjlylxn');
    table.timestamp('pvbnenmuuz');
    table.text('mnfadwicbm');
    table.text('edsgutjicv');
    table.integer('dztmutgvmk');
    table.float('skwohcvqua');
  });
  await knex.schema.alterTable('wghmvuusgz', function(table) {
    table.bigInteger('xllriyqbps');
    table.boolean('lrrvvjtyrc');
    table.string('aolfnqcjci');
    table.string('eadiaowdnw');
    table.json('fuaffixxng');
    table.float('uslcvzmqnv');
    table.float('mqwmmrytpo');
  });
  await knex.schema.alterTable('mnbancjmds', function(table) {
    table.float('kedughxslh');
    table.bigInteger('dwwxsjvpqh');
    table.float('dbjtivhkrc');
    table.bigInteger('nwaddhtxyw');
    table.text('xjnifexpgf');
    table.bigInteger('nyrltkumws');
  });
  await knex.schema.alterTable('yurietpwfj', function(table) {
    table.bigInteger('gqudwrhdhh');
    table.timestamp('kewkrjolxr');
    table.float('osbjtxqimc');
    table.timestamp('laazsmdbcv');
    table.float('afibpqszaw');
    table.integer('eluwislcmu');
  });
  await knex.schema.alterTable('hnsmjhwybk', function(table) {
    table.json('ezlyeqinxu');
    table.string('yhpizozrcd');
    table.bigInteger('ketrjwaies');
    table.boolean('ehxquekndn');
    table.json('dgwtqsofpo');
    table.boolean('mwgywkdque');
  });
  await knex.schema.alterTable('qjoxugghfk', function(table) {
    table.string('rsufawayai');
    table.timestamp('knasnlsfch');
    table.boolean('xhseiqbzlu');
    table.json('eyqelsyzke');
    table.float('ijykpzvqja');
    table.boolean('ctmovyrmbo');
    table.bigInteger('vupbxnizby');
    table.float('nklxtlasbq');
    table.bigInteger('kgkjnmiaso');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};