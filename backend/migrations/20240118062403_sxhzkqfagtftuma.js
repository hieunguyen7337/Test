'use strict';

/**
 * Migration: 20240118062403_sxhzkqfagtftuma
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hkgikkancu', function(table) {
    table.text('lcjnylfvns');
    table.timestamp('ujfagjqumr');
    table.string('zzcfcvtryo');
    table.float('ttfixuvdve');
    table.boolean('mbksqeoakh');
  });
  await knex.schema.alterTable('plbxzbkbek', function(table) {
    table.float('uxyqtpizoc');
    table.string('jxlesdgtyn');
    table.json('hgnogmlcbu');
    table.boolean('tbgfpofqho');
    table.string('epjkftjgrx');
    table.string('cmuitepojy');
    table.timestamp('esnflqisso');
  });
  await knex.schema.alterTable('phndouslof', function(table) {
    table.boolean('ihxltnkbcl');
    table.float('rhkkfhtqar');
    table.boolean('oeayylnzvy');
  });
  await knex.schema.alterTable('ybtfjotqbf', function(table) {
    table.json('ohoibivvim');
    table.timestamp('stbgwnnopc');
    table.json('ewfjjklnel');
    table.string('irmqunpelf');
    table.float('ejellxlsqo');
    table.float('pcudcdcelo');
    table.json('ocvyqielac');
    table.json('adhplzothi');
    table.timestamp('stsixeohht');
  });
  await knex.schema.alterTable('dizcitpagd', function(table) {
    table.boolean('dezqdzaaxa');
    table.boolean('luqdqduemv');
    table.bigInteger('laroexorus');
  });
  await knex.schema.alterTable('bbcldlusul', function(table) {
    table.string('santrcfynv');
    table.timestamp('ycmvzmuqdp');
    table.integer('yvobihfabr');
    table.text('cgqaobfbln');
    table.integer('tfyvntdidz');
    table.text('uytyqoolmp');
    table.boolean('udbfssaend');
    table.string('gbhxeaiynv');
    table.bigInteger('ghospcjktd');
  });
  await knex.schema.alterTable('vuiykwfxec', function(table) {
    table.string('zemoalktdw');
    table.string('tkeerijpyt');
    table.bigInteger('fulrunnlqw');
  });
  await knex.schema.alterTable('gubmhrywxz', function(table) {
    table.timestamp('ofeggofugm');
    table.json('lwbsmuajtd');
    table.string('nlpovmuged');
    table.json('yuelarcate');
    table.timestamp('eaedtpjeib');
  });
  await knex.schema.alterTable('zywsyhffrl', function(table) {
    table.timestamp('ejdniydgvg');
    table.text('vnmpcolask');
    table.json('zckcotbszv');
    table.float('xytjolifwn');
    table.text('phopnmyaro');
    table.json('btsjccwwha');
    table.string('sdlppxmfda');
    table.float('gexrqnhnpv');
    table.boolean('msssvmxpqv');
    table.integer('psfcohskwv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};