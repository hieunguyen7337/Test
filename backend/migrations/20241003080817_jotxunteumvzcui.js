'use strict';

/**
 * Migration: 20241003080817_jotxunteumvzcui
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tufoadyhnv', function(table) {
    table.integer('qeyrjfvzyb');
    table.integer('jwtbitjjlx');
    table.text('obpnwmspnn');
    table.float('idqnutczdy');
    table.text('uibvusdgzb');
    table.float('mrncnxqtfp');
  });
  await knex.schema.alterTable('haykokwpdx', function(table) {
    table.integer('fbgeddylie');
    table.boolean('imlmpnlyco');
    table.boolean('puiimtxadg');
    table.json('lswoudhwtb');
    table.json('qxzpdpimfm');
    table.integer('uwxnxncvte');
  });
  await knex.schema.alterTable('obuhijsshj', function(table) {
    table.float('jclwlrietf');
    table.string('utakirelbq');
    table.float('totxqcthcu');
    table.timestamp('nqhblgvkra');
    table.bigInteger('osjkkemovf');
    table.boolean('guyotpiulj');
    table.integer('hwtlvddmrb');
    table.float('mjreszvioj');
  });
  await knex.schema.alterTable('hpipbteiwy', function(table) {
    table.string('qcrqdyzzgv');
    table.text('mfoatlhcol');
    table.string('muvfhncmvu');
    table.bigInteger('hxazfgnnwt');
    table.string('csbghrrmwh');
    table.integer('wmaswjhzil');
  });
  await knex.schema.alterTable('vjnqwnojhs', function(table) {
    table.json('lmogtaftbb');
    table.boolean('jgqpbuuxgy');
    table.text('rxatziuypp');
    table.timestamp('jgtsulckzu');
    table.timestamp('fcgbwhbjbg');
    table.json('bbmlqiztpc');
    table.json('lbzzzwwstr');
    table.json('exxgylmval');
    table.json('pykxeiiqte');
    table.string('mxulptkaoq');
  });
  await knex.schema.alterTable('nqwzpodalm', function(table) {
    table.json('wllcbemqoh');
    table.string('zdkgrxuimf');
    table.integer('tecdophuup');
    table.boolean('yyyufsnsea');
    table.float('oeprntpanj');
    table.text('dbhadxbyxt');
    table.timestamp('eejlxhyjrx');
    table.boolean('ohoscngcee');
    table.float('zctsxvtviu');
  });
  await knex.schema.alterTable('zvzhjkukbf', function(table) {
    table.timestamp('gowpsfyvzl');
    table.timestamp('nqoiuvivfg');
    table.string('ophwsbvjsq');
    table.timestamp('svlqykzroh');
    table.string('wipzxdnrfn');
    table.integer('ojjjefskpl');
  });
  await knex.schema.alterTable('qdyfwuhcog', function(table) {
    table.json('qtijzupmnd');
    table.integer('nsilsjkzkp');
    table.json('narckuvdfh');
    table.string('smychoxlag');
  });
  await knex.schema.alterTable('dacsdyatwj', function(table) {
    table.integer('akjkmrvszc');
    table.float('pfpkmhyloi');
    table.float('pypfkdzomx');
    table.float('mhghpzimpk');
    table.float('ivvinbfmjf');
    table.boolean('jryhghzwxv');
    table.string('jchjbjrojz');
    table.float('cvxudxhdle');
  });
  await knex.schema.alterTable('widgsluryv', function(table) {
    table.integer('nkdlegbcqh');
    table.float('aoczaaxthi');
    table.bigInteger('hnjngqpcmp');
    table.text('ewtyernpan');
    table.bigInteger('cbsoifeblw');
    table.string('iguwrewbzh');
    table.integer('wwmhxysbij');
    table.bigInteger('yrjsynhdeo');
    table.integer('sgihbygkxr');
  });
  await knex.schema.alterTable('cjxmtpkkwh', function(table) {
    table.bigInteger('gtamqnvrqr');
    table.json('yoppumycby');
    table.integer('jjuaskdzvy');
    table.timestamp('gubohfxwfw');
    table.timestamp('tnntsypoey');
  });
  await knex.schema.alterTable('nvpwsijmkj', function(table) {
    table.string('kmnkxczosg');
    table.boolean('xbapopjlhw');
    table.float('fjfcqghymr');
    table.text('ayaszzedfw');
    table.boolean('kenlbwnfkd');
    table.integer('wcidsmuwzb');
    table.timestamp('combhavmct');
    table.bigInteger('neffclxweh');
  });
  await knex.schema.alterTable('hspohvshxe', function(table) {
    table.timestamp('ddbbkqyolv');
    table.integer('xzdwknroqv');
    table.boolean('xitczerkda');
    table.float('jntntyamef');
    table.text('exhlcssbjl');
  });
  await knex.schema.alterTable('hzoasoyhij', function(table) {
    table.json('juwdkefxrg');
    table.float('strjjbmcwj');
    table.boolean('kbtpwftncz');
    table.float('mujcknoxnr');
    table.text('wqphszjxro');
    table.boolean('xqmnudtokm');
    table.timestamp('iviepkfhst');
    table.float('ctylwoffdt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};