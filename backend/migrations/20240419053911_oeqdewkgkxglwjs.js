'use strict';

/**
 * Migration: 20240419053911_oeqdewkgkxglwjs
 * Description: Add column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tonsvcdmqv', function(table) {
    table.bigInteger('bxxakxcoqm');
    table.json('gtgvpukxsg');
    table.bigInteger('nuyxerwbbr');
    table.boolean('snuwbfdtic');
  });
  await knex.schema.alterTable('egxoljfzev', function(table) {
    table.string('intmunpziq');
    table.boolean('gushtdrnqk');
    table.json('mctcerlkuh');
    table.boolean('jjeugmdfdf');
    table.json('pjgdgwkfxa');
    table.json('wmqvbxdltc');
    table.timestamp('gbyfcizngz');
  });
  await knex.schema.alterTable('sprmthcfkk', function(table) {
    table.text('ukncwgeybh');
    table.text('psaoblzdfm');
    table.timestamp('gbigpfpbmu');
    table.text('puvlhpheqg');
    table.boolean('nfbxpvhsev');
    table.bigInteger('sysfbxpdop');
    table.integer('gxawissxgn');
  });
  await knex.schema.alterTable('iityqeyipo', function(table) {
    table.text('welihrzhct');
    table.integer('hapthuprdm');
    table.bigInteger('nkaaflpobj');
    table.bigInteger('xfnvuqrmvr');
    table.boolean('gonxtsezlk');
    table.timestamp('tlbgurnmwr');
  });
  await knex.schema.alterTable('jijyihembh', function(table) {
    table.boolean('xqpjvbseld');
    table.boolean('yrnywvmooh');
    table.timestamp('hllxwsbhpu');
    table.string('kinnnloqui');
  });
  await knex.schema.alterTable('rejlrvljto', function(table) {
    table.json('srlbramkbd');
    table.float('rimqyriufx');
    table.float('tzzruodimu');
    table.text('rtyhomgjjj');
    table.string('dapwjphxtk');
    table.integer('ekysehblks');
  });
  await knex.schema.alterTable('lqztreqlrl', function(table) {
    table.timestamp('uallnvbfkx');
    table.float('tbhjxfqdqe');
    table.json('nkqyrycvfq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};