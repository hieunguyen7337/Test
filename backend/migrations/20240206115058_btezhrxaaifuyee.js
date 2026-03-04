'use strict';

/**
 * Migration: 20240206115058_btezhrxaaifuyee
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fbazqkucml', function(table) {
    table.timestamp('ksjrvhypwk');
    table.string('dyyrukysmq');
    table.string('yodufwgjqo');
    table.timestamp('nykowboqns');
    table.float('bcvehxbmel');
    table.boolean('bhrsbtjfpm');
    table.integer('zqtciqidjb');
    table.text('vkbyycgmwa');
    table.text('qdueugwlkm');
  });
  await knex.schema.alterTable('znaicoyhuf', function(table) {
    table.bigInteger('tqerhirwas');
    table.json('aazqtsubda');
    table.string('vunbpryjeb');
    table.float('kojlipvaog');
    table.integer('yiiwkrtilf');
    table.timestamp('kenhewdssz');
    table.text('dzyhrfdxpr');
    table.timestamp('ztfzmfgonb');
    table.float('jnqjbbkuzs');
  });
  await knex.schema.alterTable('gcnldgjsrz', function(table) {
    table.integer('gkxirfzada');
    table.float('moymbkhfrr');
    table.integer('swiuzulkir');
    table.float('ezznevqjvn');
    table.float('eqigqzyaqb');
  });
  await knex.schema.alterTable('excltlfxee', function(table) {
    table.string('sjooazlelh');
    table.text('goaixztxsg');
    table.float('nrpsiwjyrg');
  });
  await knex.schema.alterTable('iohubnjwdx', function(table) {
    table.bigInteger('pgnpvekwcr');
    table.text('jurfjkosjp');
    table.float('ilmtscalft');
    table.text('yxntylawit');
    table.json('vxtiehhaev');
    table.timestamp('joluyswvqh');
    table.boolean('erzlicmtdc');
    table.bigInteger('kacnvchmoz');
  });
  await knex.schema.alterTable('enndhfljwb', function(table) {
    table.integer('yczvjihzmj');
    table.boolean('nvksopnuxd');
    table.string('syxygirkjm');
  });
  await knex.schema.alterTable('hxliqdztpq', function(table) {
    table.float('sojelxnftc');
    table.json('obotwcbiea');
    table.boolean('ayaklhnrso');
    table.float('tvfzabwibz');
    table.string('qsjrwzwapn');
    table.bigInteger('dnjuwsrhcy');
  });
  await knex.schema.alterTable('eguhvbcjaa', function(table) {
    table.text('nlvpkxwawe');
    table.bigInteger('igqtzsdgag');
    table.boolean('zgrpcbncmi');
    table.text('odmirozxev');
  });
  await knex.schema.alterTable('xghukdsvhj', function(table) {
    table.integer('ijmworilku');
    table.boolean('jlcqnoycng');
    table.timestamp('qbinvgvzjn');
    table.json('hjzodmsjvy');
    table.boolean('swpgocwcpv');
    table.float('glaorycdmd');
    table.json('lfwigseyvb');
    table.json('uozmfiakti');
    table.float('zeelnzdjfb');
    table.float('jrqpntyqkm');
  });
  await knex.schema.alterTable('ggtcdtxbss', function(table) {
    table.bigInteger('wabuoxfsar');
    table.boolean('hesryzpmel');
    table.integer('lafnlbaqeb');
    table.json('jodagdphbu');
    table.bigInteger('vgrvfpngcy');
    table.timestamp('uydpdumljb');
    table.json('dfpkxlrwew');
  });
  await knex.schema.alterTable('jggatfgaau', function(table) {
    table.timestamp('eoiwkwwhck');
    table.string('craulkdexy');
    table.timestamp('znsgkrmnhe');
    table.timestamp('bxtgggktfu');
    table.timestamp('jmispoenfh');
  });
  await knex.schema.alterTable('apkiwrojdq', function(table) {
    table.json('lnrezhjbqc');
    table.boolean('edpjnrqxtu');
    table.float('ywaaezbbwd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};