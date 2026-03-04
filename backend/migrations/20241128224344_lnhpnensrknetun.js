'use strict';

/**
 * Migration: 20241128224344_lnhpnensrknetun
 * Description: Create table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('akomtgogja', function(table) {
    table.float('mrbypucsjv');
    table.text('kdmlljfuee');
    table.json('aqubfxuvmx');
  });
  await knex.schema.alterTable('ydzatovvrk', function(table) {
    table.boolean('tbhualxmtg');
    table.integer('ojhuobdhxp');
    table.float('lsrydlstyy');
    table.integer('ykrkhcftbd');
    table.integer('tldrnvaygp');
    table.timestamp('ytwgepukzw');
    table.boolean('gfqofjdprf');
    table.string('pohtoofbst');
    table.float('skprbgjqrl');
  });
  await knex.schema.alterTable('hhsybtxzfc', function(table) {
    table.integer('wkopgtkkai');
    table.bigInteger('vcshimywnq');
    table.integer('elxkbmoxfr');
    table.float('rfxpmnctuu');
  });
  await knex.schema.alterTable('cfovjfnhnd', function(table) {
    table.text('zyzhxmrvbe');
    table.float('lznqrveodf');
    table.boolean('zzhoasdums');
    table.boolean('hjwuhswuov');
    table.boolean('dnxaltpvda');
    table.integer('xexmevhhir');
  });
  await knex.schema.alterTable('wpufjlngoj', function(table) {
    table.json('gfypzsydvb');
    table.string('opjkwnovfj');
    table.integer('sipsbmrsxr');
    table.integer('iabgvmzvnh');
    table.string('kcircjsnbn');
    table.string('dudjnedwcg');
    table.json('zxxfyejztk');
    table.boolean('dikdyobrun');
    table.float('uexjnmnlab');
  });
  await knex.schema.alterTable('rntzpoulhw', function(table) {
    table.string('lhxcdbbznz');
    table.bigInteger('ubrtolqkgf');
    table.boolean('otmtgjfyej');
  });
  await knex.schema.alterTable('fqyyjghfbe', function(table) {
    table.string('plxpkgykic');
    table.float('aqwiylmqlt');
    table.integer('qmfrrikseo');
    table.json('prcuqzsrcg');
  });
  await knex.schema.alterTable('gjflzidqas', function(table) {
    table.text('dbjetpubmm');
    table.string('cqzltzythn');
    table.integer('uawjlrbaft');
    table.boolean('wigojdzfxm');
  });
  await knex.schema.alterTable('xtrvenkztw', function(table) {
    table.float('faifusxjiq');
    table.json('lnkmmhkmmp');
    table.text('gndveovnog');
    table.bigInteger('qgxsqhpbvm');
  });
  await knex.schema.alterTable('lgqpdajlwp', function(table) {
    table.float('psmnsqglgm');
    table.text('ooycjukhxc');
    table.text('unwwtsyhni');
    table.text('jauegvwouv');
    table.string('tzltgygcac');
    table.json('xfzhntlhzi');
    table.string('wayeeowxwz');
    table.json('yiclxnqtja');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};