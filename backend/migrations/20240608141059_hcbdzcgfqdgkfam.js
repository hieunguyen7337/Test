'use strict';

/**
 * Migration: 20240608141059_hcbdzcgfqdgkfam
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cxxczchugg', function(table) {
    table.boolean('bqvowdthdp');
    table.string('edomjnypre');
    table.bigInteger('fhyojxrtvi');
    table.boolean('ktuiswpdoi');
    table.json('dofmtgpwer');
  });
  await knex.schema.alterTable('zwlvbsxpta', function(table) {
    table.timestamp('zzzwhvwwcd');
    table.boolean('gdwpctoqme');
    table.json('dujeusivfh');
    table.text('gkuzfignvp');
    table.timestamp('xddvkpuqls');
  });
  await knex.schema.alterTable('owrdplbnti', function(table) {
    table.text('rmemfwavha');
    table.bigInteger('ywilqejrsc');
    table.boolean('ayquxrvhpc');
  });
  await knex.schema.alterTable('fgpbyuikcv', function(table) {
    table.integer('ragpzbjtdu');
    table.string('wixutsfnaa');
    table.text('zrjtglzasz');
    table.timestamp('dlwuslihdc');
    table.float('ecvgajafix');
    table.integer('kbcpgvaefv');
    table.float('vmxbkrbkgy');
    table.string('ojszdnmuuj');
    table.timestamp('becykvalwu');
    table.boolean('wntjvvngms');
  });
  await knex.schema.alterTable('mregiosprl', function(table) {
    table.json('zacxbulymo');
    table.float('ptuvnyeezl');
    table.text('lchzffopbs');
    table.bigInteger('qhysiafjkd');
    table.text('dismkpvmnz');
    table.text('pdcvogksbv');
    table.boolean('vaogbjwcgv');
    table.integer('qfnlfiqopj');
    table.timestamp('npsvunvbhh');
  });
  await knex.schema.alterTable('aspeuamuus', function(table) {
    table.json('rlhadupbml');
    table.json('huxnrwvuab');
    table.timestamp('nocwqzmonk');
    table.string('xguoldcvcy');
    table.bigInteger('cewcdczesq');
    table.json('mxynyhhogh');
  });
  await knex.schema.alterTable('zvikzmbhrn', function(table) {
    table.string('uxwpkcqyli');
    table.json('voccfpuerb');
    table.integer('polokjpovw');
  });
  await knex.schema.alterTable('fafvlinufs', function(table) {
    table.float('lyknsdlpaj');
    table.string('ozxifdqrrg');
    table.boolean('opymqrqrea');
    table.string('hwxcjpmkks');
    table.boolean('frhymbumut');
    table.integer('plvekwhxuf');
    table.integer('uqpjxogvwc');
    table.json('vvsdbanxlk');
    table.bigInteger('hchpmswzre');
  });
  await knex.schema.alterTable('jkenptbmel', function(table) {
    table.bigInteger('xdurgzolxy');
    table.json('dsltftmzck');
    table.boolean('egvcegdioq');
    table.string('rkpsrvhdri');
    table.bigInteger('jkufqthvmm');
  });
  await knex.schema.alterTable('hxwajpagfv', function(table) {
    table.integer('bkxbjucfry');
    table.bigInteger('nvdayeuubx');
    table.string('cuypntvaox');
    table.boolean('ynsrjwkxcv');
    table.float('wuectdkdiz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};