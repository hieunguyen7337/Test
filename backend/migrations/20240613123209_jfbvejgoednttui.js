'use strict';

/**
 * Migration: 20240613123209_jfbvejgoednttui
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ifzvmbuvub', function(table) {
    table.bigInteger('uwfqwdaqyr');
    table.text('kdyclifhty');
    table.string('smuddbajpg');
    table.boolean('ayzjowvhqt');
    table.boolean('bmtleaapex');
    table.text('vzlbltzkzk');
    table.timestamp('zdgsraupkd');
    table.text('bvpddumfjj');
    table.float('gzhbysohok');
    table.integer('ybluopkyoz');
  });
  await knex.schema.alterTable('kikhzesxys', function(table) {
    table.integer('rjvwkkgjsz');
    table.text('xqbkngnlxf');
    table.string('uxcnvtqjyn');
    table.boolean('pnixwsitwv');
    table.timestamp('ritygljsbd');
  });
  await knex.schema.alterTable('xpgnbamock', function(table) {
    table.float('nvqouqtmzl');
    table.timestamp('zornswgusk');
    table.integer('jmgjxqsakc');
    table.integer('nylqhsummw');
    table.bigInteger('iuxolsygxk');
    table.string('olhvwugini');
  });
  await knex.schema.alterTable('htekdtapmt', function(table) {
    table.text('vqozwdrrip');
    table.float('pynmntjpuf');
    table.float('dpdfkeeewi');
    table.text('hurbqofeka');
    table.json('elwvwojtwf');
    table.float('zwhiajmgdq');
    table.bigInteger('chqdfbvypr');
    table.bigInteger('hvyyubcvyc');
  });
  await knex.schema.alterTable('ypmqqaafhy', function(table) {
    table.json('dzuhdzsowa');
    table.string('eyrmgcwjgt');
    table.timestamp('nlkpntllxt');
    table.text('qzyzklmyir');
  });
  await knex.schema.alterTable('tsvynntvgm', function(table) {
    table.integer('pqsttildkg');
    table.timestamp('zykbgpccbq');
    table.float('cgwwndjflr');
    table.bigInteger('zyijxcwqpl');
    table.boolean('twftnkvhgy');
    table.integer('ewuzgxgdem');
  });
  await knex.schema.alterTable('dshahvnbcs', function(table) {
    table.float('iqqkqoqnvi');
    table.bigInteger('asygfruexd');
    table.float('dvekonibdf');
    table.bigInteger('axnzuohrvf');
    table.timestamp('aqmlkzntgn');
    table.bigInteger('quoxpwzron');
    table.timestamp('hljfrhhzsz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};