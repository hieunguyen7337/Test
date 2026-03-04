'use strict';

/**
 * Migration: 20240826021427_rnmartggvuhxysn
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xkijmbrfnp', function(table) {
    table.timestamp('ecjddgqtnf');
    table.boolean('yftbvrhcwq');
    table.bigInteger('kjgcxmuolv');
    table.boolean('dfwypaakcr');
    table.float('bqgsmqqirv');
    table.timestamp('qugajxmyxk');
    table.boolean('gxbgzncwhu');
    table.float('whnwydarbh');
    table.text('dwsguxhmlf');
    table.json('wtstqpnpyv');
  });
  await knex.schema.alterTable('vzgrdiqaqp', function(table) {
    table.bigInteger('qdwkbtekcy');
    table.string('vgejsaephe');
    table.float('rbxguftgtq');
  });
  await knex.schema.alterTable('nzhbtngevh', function(table) {
    table.float('dtehtczoxv');
    table.float('drfogpofyr');
    table.json('mfvkggwyye');
  });
  await knex.schema.alterTable('itnuwxdqkz', function(table) {
    table.string('aicgtcdmeo');
    table.json('xvfltgoyey');
    table.timestamp('gjngjutynw');
    table.string('yerexwnqgo');
    table.integer('mlmlwyfgzs');
    table.boolean('exyqqjphlz');
    table.float('sonstoilvy');
    table.json('pvvpcpasrc');
    table.json('wvjxykqphp');
  });
  await knex.schema.alterTable('zzmqabouse', function(table) {
    table.timestamp('alwzmuzieo');
    table.timestamp('qrkgvhfkiy');
    table.float('bzglbhyjdt');
    table.boolean('lozkhfuhwd');
    table.timestamp('ubyynijqiw');
    table.json('qmliimpjze');
    table.timestamp('edzclryzkk');
    table.integer('cccdkgvsaj');
    table.string('zclhekuscr');
  });
  await knex.schema.alterTable('aihzlkzqyc', function(table) {
    table.timestamp('jjgenfgmyf');
    table.json('obxjwgxryc');
    table.timestamp('mylljmmxyo');
    table.integer('gpdujcdpgs');
    table.bigInteger('ehvfwnrzxa');
  });
  await knex.schema.alterTable('zeriavpxzz', function(table) {
    table.text('obtukamugc');
    table.json('zqpmcwvctk');
    table.float('hsdttbidhu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};