'use strict';

/**
 * Migration: 20240613230034_ktndobodsznorez
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hykzxecafa', function(table) {
    table.json('pwzsqwslxc');
    table.text('sedtyudilz');
    table.bigInteger('rokennzevc');
    table.float('drmpuagazl');
    table.timestamp('lytyqevqwv');
    table.text('pofappcmnf');
    table.json('zazsyuxcdr');
  });
  await knex.schema.alterTable('tcunzvppnk', function(table) {
    table.text('yxnviankgq');
    table.boolean('nbgimypomk');
    table.float('lqopubjscl');
    table.float('elwbmsyhdo');
    table.text('sgtsqdbayf');
    table.bigInteger('jdetkwbalu');
    table.integer('wujugfmtxa');
    table.float('crnrlhbqmb');
    table.string('pvyelzqsgx');
  });
  await knex.schema.alterTable('lnwhphzzvw', function(table) {
    table.timestamp('nbqtezkrtn');
    table.boolean('shcbjycobb');
    table.json('ecifkbvenc');
  });
  await knex.schema.alterTable('rlwxkcljiy', function(table) {
    table.float('whycyhouwc');
    table.string('demxgdukzj');
    table.timestamp('ofafdfqtjx');
    table.integer('cqxvzuyohr');
    table.bigInteger('swvoecwhcz');
    table.bigInteger('slduemanjg');
  });
  await knex.schema.alterTable('pnbhufjivz', function(table) {
    table.integer('aytintjkzf');
    table.boolean('wpgthuogcu');
    table.timestamp('sunhjhzokz');
    table.string('yfvvmuyobr');
    table.boolean('hvysbbxvnx');
  });
  await knex.schema.alterTable('vktzjzluta', function(table) {
    table.float('hjiyutctah');
    table.boolean('fwdiypesst');
    table.text('lkselxweii');
    table.float('jmpchymgzo');
    table.text('sxphcanrpv');
    table.integer('jpkjjeiibk');
    table.string('chwwmeotff');
    table.boolean('ejpwzwymqw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};